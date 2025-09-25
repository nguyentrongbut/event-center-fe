// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// TService,
import type {TSignIn} from "@/types/data";

// ** utils
import {getCookie} from "@/utils/cookieUtils.ts";

// ** Pages
import type {CreateServiceForm} from "@/pages/admin/service/create/form.create.service.tsx";
import type {EditServiceForm} from "@/pages/admin/service/edit/form.edit.service.tsx";

const url = CONFIG_API.SERVICE.INDEX;

export async function getListService() {
    // try {
    //     const response: TService[] = await axios.get(url);
    //
    //     return response;
    // } catch (error) {
    //     console.error(error);
    // }
    return [
        {
            "id": 1,
            "name": "Quay phim – chụp ảnh",
            "price": 16500000,
            "description": "Lace Studio – nơi ghi dấu cho bạn những khoảnh khắc đặc biệt và đầy ý nghĩa qua lăng kính của dịch vụ quay phim và chụp ảnh chuyên nghiệp. Là một thương hiệu trong hệ sinh thái dịch vụ cưới hỏi trọn gói thuộc Cater Ease Palace, Lace Studio cung cấp các dịch vụ: chụp ảnh cưới (Pre-wedding), quay phim chụp hình, sự kiện doanh nghiệp, chân dung cá nhân, gia đình, phục vụ các sự kiện hội nghị, team building, sinh nhật,… Chúng tôi có phim trường rộng 3000m2, đã và đang hợp tác với 100+ khách hàng là cá nhân, tổ chức. Với đội ngũ nhiếp ảnh giàu kinh nghiệm và tâm huyết, chúng tôi cam kết ghi lại những bức ảnh đẹp nhất, video chân thực nhất. Cho dù là các buổi chụp ảnh cá nhân, hình ảnh sản phẩm, sự kiện cưới hoặc các dự án thương mại, chúng tôi luôn sẵn lòng để đáp ứng mọi yêu cầu của bạn và mang lại sự hài lòng tối đa. Chúng tôi cam kết luôn đảm bảo rằng mỗi khách hàng đều nhận được sự chăm sóc và phục vụ tận tâm nhất, cùng với những tác phẩm nghệ thuật mang đậm bản sắc cá nhân và cảm xúc riêng của họ. Hãy để Lace Studio & Cater Ease Palace góp phần làm nên câu chuyện đặc biệt của bạn thông qua ống kính sáng tạo của chúng tôi. Liên hệ ngay với chúng tôi để bắt đầu hành trình ghi lại những khoảnh khắc không thể quên!",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158352/camera_puokjg.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158354/camera1_ngk9iq.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158357/camera2_atja2r.jpg"
            ],
            "icon": "🎥",
            "deleted": false
        },
        {
            "id": 2,
            "name": "Thời trang cưới",
            "price": 11000000,
            "description": "Tổng hợp Bộ sưu tập trang phục cưới tại Lace Bridal (Váy cưới, áo dài, vest) sẽ chiều lòng mọi dâu rể khó tính, mang đến sự lựa chọn hoàn hảo để các cặp đôi thể hiện phong cách và cá tính riêng của mình vào ngày cưới. Với sự kết hợp giữa thiết kế hiện đại và sự tinh tế của thời trang cổ điển, Lace Bridal mang đến BST trang phục cưới đầy ấn tượng. Hòa quyện giữa sự lãng mạn của chất ren mềm mại và vẻ đẹp kiêu sa của những kiểu dáng công chúa, Lace Bridal tự hào cho ra mắt những chiếc váy cưới chất lượng hàng đầu để giúp cô dâu tỏa sáng mọi khoảnh khắc. Mỗi thiết kế đều khắc họa nên vẻ đẹp chân phương một cách gợi cảm của người con gái Việt Nam. Cơ hội tỏa sáng như “nàng công chúa” trong ngày cưới sẽ không còn là mơ nếu bạn đồng hành cùng Lace Bridal ngay hôm nay. Bạn có thể đến và thử váy tại Lace Studio hoặc liên hệ qua Hotline 0345 978 118 để được tư vấn chi tiết.",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158657/weddingdress_b1brgn.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158660/weddingdress1_nomg0z.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158662/weddingdress2_h7qspp.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158664/weddingdress3_xu9rzg.jpg"
            ],
            "icon": "🍸",
            "deleted": false
        },
        {
            "id": 3,
            "name": "Trang trí tiệc",
            "price": 18000000,
            "description": "Chúng tôi hiểu rằng mỗi cặp đôi đều có một câu chuyện riêng và mong muốn một lễ cưới lý tưởng. Với đội ngũ chuyên nghiệp và tận tâm, suốt 12 năm qua, Lace Decoration đã tạo ra không gian trang trí tinh tế, phản ánh phong cách và cá tính của các cặp đôi. Từ việc lên ý tưởng ban đầu cho đến thiết kế và triển khai cuối cùng, Lace Cater Ease Palace sẽ đồng hành cùng các bạn để tạo ra một không gian đặc biệt. Dù bạn mơ về một lễ cưới sang trọng và lãng mạn, hoặc một buổi tiệc đơn giản và ấm cúng, chúng tôi có đầy đủ sự linh hoạt và sáng tạo để biến ý tưởng của bạn thành hiện thực. Lace tin chắc rằng, chúng tôi là người bạn đồng hành đáng tin cậy trong ngày cưới của bạn. Đừng băn khoăn điều gì cả, hãy để chúng tôi chăm sóc mọi chi tiết, từ hoa trang trí đến ánh sáng, từ bàn tiệc đến không gian chụp hình, để bạn có thể tận hưởng ngày cưới một cách hoàn hảo nhất.",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158925/weddingtt_hs77ch.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751402321/alexander-sinn-mFhGgUWNWVg-unsplash_kl4imm.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751402323/snappr-S7twrJmc_1k-unsplash_schihk.jpg"
            ],
            "icon": "🐰",
            "deleted": false
        },
        {
            "id": 4,
            "name": "Cưới trọn gói",
            "price": 45500000,
            "description": "Chắc chắn rằng, ngày cưới không chỉ đơn thuần là sự kết hợp giữa hai con tim mà còn là hành trình tìm kiếm điểm chạm hoàn hảo – nơi mà tất cả những khao khát và ước mơ của các bạn được thể hiện. Và Cater Ease Palace như một điểm chạm đặc biệt, nơi tinh hoa của nghệ thuật tổ chức cưới hội tụ. Bởi lẽ tại đây, bạn dễ dàng chạm tới những khoảnh khắc đẹp nhất với nghệ thuật chụp ảnh cưới/ phóng sự cưới; dịch vụ trang trí cưới ấn tượng và tinh tế; bộ sưu tập váy cưới và áo dài thiết kế độc quyền và không gian cưới sang trọng tại Cater Ease Palace",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172116/weddingdress1_gav3da.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172118/weddingdress2_cn8scs.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172121/weddingdress1_pldxrd.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172123/wedding2_pwjr7i.jpg"
            ],
            "icon": "🎯",
            "deleted": false
        },
        {
            "id": 5,
            "name": "Sinh nhật trọn gói",
            "price": 34500000,
            "description": "Chắc chắn rằng, ngày cưới không chỉ đơn thuần là sự kết hợp giữa hai con tim mà còn là hành trình tìm kiếm điểm chạm hoàn hảo – nơi mà tất cả những khao khát và ước mơ của các bạn được thể hiện. Và Cater Ease Palace như một điểm chạm đặc biệt, nơi tinh hoa của nghệ thuật tổ chức cưới hội tụ. Bởi lẽ tại đây, bạn dễ dàng chạm tới những khoảnh khắc đẹp nhất với nghệ thuật chụp ảnh cưới/ phóng sự cưới; dịch vụ trang trí cưới ấn tượng và tinh tế; bộ sưu tập váy cưới và áo dài thiết kế độc quyền và không gian cưới sang trọng tại Cater Ease Palace",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751160422/weddingtt_daexru.jpg"
            ],
            "icon": "🤹",
            "deleted": false
        }
    ]
}

export async function getDetailService(id: number) {
    // try {
    //     const response: TService = await axios.get(`${url}/${id}`);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(id)
    return {
        "id": 1,
        "name": "Quay phim – chụp ảnh",
        "price": 16500000,
        "description": "Lace Studio – nơi ghi dấu cho bạn những khoảnh khắc đặc biệt và đầy ý nghĩa qua lăng kính của dịch vụ quay phim và chụp ảnh chuyên nghiệp. Là một thương hiệu trong hệ sinh thái dịch vụ cưới hỏi trọn gói thuộc Cater Ease Palace, Lace Studio cung cấp các dịch vụ: chụp ảnh cưới (Pre-wedding), quay phim chụp hình, sự kiện doanh nghiệp, chân dung cá nhân, gia đình, phục vụ các sự kiện hội nghị, team building, sinh nhật,… Chúng tôi có phim trường rộng 3000m2, đã và đang hợp tác với 100+ khách hàng là cá nhân, tổ chức. Với đội ngũ nhiếp ảnh giàu kinh nghiệm và tâm huyết, chúng tôi cam kết ghi lại những bức ảnh đẹp nhất, video chân thực nhất. Cho dù là các buổi chụp ảnh cá nhân, hình ảnh sản phẩm, sự kiện cưới hoặc các dự án thương mại, chúng tôi luôn sẵn lòng để đáp ứng mọi yêu cầu của bạn và mang lại sự hài lòng tối đa. Chúng tôi cam kết luôn đảm bảo rằng mỗi khách hàng đều nhận được sự chăm sóc và phục vụ tận tâm nhất, cùng với những tác phẩm nghệ thuật mang đậm bản sắc cá nhân và cảm xúc riêng của họ. Hãy để Lace Studio & Cater Ease Palace góp phần làm nên câu chuyện đặc biệt của bạn thông qua ống kính sáng tạo của chúng tôi. Liên hệ ngay với chúng tôi để bắt đầu hành trình ghi lại những khoảnh khắc không thể quên!",
        "images": [
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158352/camera_puokjg.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158354/camera1_ngk9iq.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751158357/camera2_atja2r.jpg"
        ],
        "icon": "🎥",
        "deleted": false
    }
}

export async function createService(dataService: CreateServiceForm) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();

    formData.append("name", dataService.name);
    formData.append("price", dataService.price.toString());
    formData.append("description", dataService.description);
    formData.append("icon", dataService.icon);

    dataService.images.forEach((img) => {
        if (img instanceof File) {
            formData.append("images", img);
        }
    });

    try {
        const response = await axios.post(`${url}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function editService(
    dataService: EditServiceForm,
    id: number,
    originalImages: string[]
) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    const formData = new FormData();
    formData.append("Name", dataService.name);
    formData.append("Price", dataService.price.toString());
    formData.append("Description", dataService.description);
    formData.append("Icon", dataService.icon);

    const addImages = dataService.images.filter(img => img instanceof File);
    const removeImages = originalImages.filter(img => !dataService.images.includes(img));

    addImages.forEach((file) => formData.append("AddImages", file));
    removeImages.forEach((url) => formData.append("RemoveImages", url));

    try {
        const response = await axios.patch(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteService(id: number) {

    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.delete(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Failed to delete service:", error);
    }
}