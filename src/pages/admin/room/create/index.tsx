// ** Components
import ContainerAdmin from "@/components/common/admin/container.admin.tsx";
import {HeadingAdmin} from "@/components/typography/admin";

// ** Pages
import FormCreateRoom from "@/pages/admin/room/create/form.create.room.tsx";

const CreateRoom = () => {
    return (
        <ContainerAdmin>
            <HeadingAdmin>
                Add New Room
            </HeadingAdmin>
            <FormCreateRoom/>
        </ContainerAdmin>
    )
}

export default CreateRoom