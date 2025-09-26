// ** React
import {useState} from "react";

// ** Shadcn ui
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";

// ** Pages
import FormUpdateProfile from "@/pages/profile/components/form.update.profile.tsx";
import DialogHeaderSticky from "@/pages/profile/components/dialog.header.sticky.tsx";

// ** types
import type {TProfileAPI} from "@/types/data";

const DialogUpdateProfile = ({infoProfile, fetchProfile}: { infoProfile: TProfileAPI, fetchProfile: () => void }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <h2 className="text-sm font-bold hover:text-primary cursor-pointer md:mr-4">Update</h2>
            </DialogTrigger>
            <DialogContent className="p-0">
                <DialogHeaderSticky title="Update Profile"/>
                <div className="px-6 pb-6">
                    <FormUpdateProfile infoProfile={infoProfile} onClose={() => setOpen(false)} fetchProfile={fetchProfile}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogUpdateProfile