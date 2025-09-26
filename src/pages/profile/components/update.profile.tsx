// ** Shadcn ui
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";

// ** Pages
import DialogUpdateProfile from "@/pages/profile/components/dialog.update.profile.tsx";
import InfoProfile from "@/pages/profile/components/info.profile.tsx";
import CardProfile from "@/pages/profile/components/card.profile.tsx";

// ** types
import type {TProfileAPI} from "@/types/data";

const UpdateProfile = ({infoProfile, fetchProfile}: { infoProfile: TProfileAPI, fetchProfile: () => void }) => {
    return (
        <div>
            <CardProfile>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <Avatar className="size-14 md:size-16 cursor-default">
                            <AvatarImage src="kdd" alt="@shadcn"/>
                            <AvatarFallback>
                                <img
                                    src={infoProfile?.avatar || "/default-avatar.png"}
                                    alt="@shadcn"
                                    width={80}
                                    height={80}
                                    className="object-cover size-20"
                                />
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-md font-bold">{infoProfile?.name}</h1>
                            <div className="text-[15px] text-muted-foreground flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                                <span>CEID: <span className="text-sm text-darkGray dark:text-white ml-2 md:ml-4">{infoProfile?.id}</span></span>
                                <span className="flex items-center">Status:
                                <Badge variant="active" className="ml-2 md:ml-4">{infoProfile?.status || "Active"}</Badge>
                                </span>
                            </div>
                        </div>
                    </div>
                    <DialogUpdateProfile infoProfile={infoProfile} fetchProfile={fetchProfile}></DialogUpdateProfile>
                </div>
            </CardProfile>

            <CardProfile className="mt-6">
                <div className="font-medium text-[15px] text-muted-foreground">
                    <InfoProfile title="email" name={infoProfile?.email}></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="phone" name={infoProfile?.phone}></InfoProfile>
                    <Separator className="my-4" />
                    <InfoProfile title="address" name={infoProfile?.address}></InfoProfile>
                </div>
            </CardProfile>
        </div>
    );
}

export default UpdateProfile;