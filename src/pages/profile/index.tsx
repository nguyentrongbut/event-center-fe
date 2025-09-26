// ** React
import { useEffect, useState } from "react";

// ** React router
import { Link, useNavigate } from "react-router-dom";

// ** Components
import UpdateProfile from "@/pages/profile/components/update.profile.tsx";

// ** Shadcn ui
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

// ** Types
import type {TProfileAPI} from "@/types/data";

// ** Services
import {getProfile} from "@/services/auth";
import Container from "@/components/common/container.tsx";


const Profile = () => {
    const [infoProfile, setInfoProfile] = useState<TProfileAPI>();
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const profile = await getProfile();
            if (!profile) {
                navigate("/sign-in");
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setInfoProfile(profile);
            }
        } catch (err) {
            console.error("Failed to fetch profile:", err);
            navigate("/sign-in");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [navigate]);

    if (!infoProfile) {
        return <div className="container mx-auto py-8">Loading profile...</div>;
    }

    return (
        <Container className="pt-10 pb-20">
            <Breadcrumb className="mb-6">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <span>/</span>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Profile</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <UpdateProfile infoProfile={infoProfile} fetchProfile={fetchProfile}/>
        </Container>
    );
};

export default Profile;
