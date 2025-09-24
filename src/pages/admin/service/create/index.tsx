// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormCreateService from "@/pages/admin/service/create/form.create.service.tsx";

const CreateService = () => {
    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Add New Service
            </HeadingAdmin>
            <FormCreateService/>
        </ContainerAdmin>
    )
}

export default CreateService