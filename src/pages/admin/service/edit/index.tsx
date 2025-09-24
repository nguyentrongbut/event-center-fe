// ** React
import { useEffect, useState } from "react";

// ** React router
import {useParams} from "react-router";

// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormEditService from "@/pages/admin/service/edit/form.edit.service.tsx";

// ** Types
import type {TService} from "@/types/data";

// ** services
import {getDetailService} from "@/services/services";


const EditService = () => {

    const { id } = useParams<{ id: string }>();
    const [service, setService] = useState<TService | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                if (!id) return;
                const data = await getDetailService(Number(id));
                setService(data);
            } catch (error) {
                console.error("Failed to fetch service:", error);
            }
        };

        fetchService();
    }, [id]);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <ContainerAdmin>
            <HeadingAdmin>Update Service</HeadingAdmin>
            <FormEditService service={service} />
        </ContainerAdmin>
    );
};

export default EditService;
