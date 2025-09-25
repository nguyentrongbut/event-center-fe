// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";
import {getCookie} from "@/utils/cookieUtils.ts";
import type {TSignIn} from "@/types/data";

// ** types
// import type {TVenue} from "@/types/data";

const url = CONFIG_API.VENUE.INDEX

export async function getListVenue() {
    // try {
    //     const response: TVenue[] = await axios.get(url);
    //
    //     return response;
    // } catch (error) {
    //     console.error(error);
    //     return null;
    // }

    return [
        {
            "id": 1,
            "name": "Cảnh Hồ",
            "slug": "canh-ho",
            "description": "Không chỉ nổi bật với với lối kiến trúc tinh tế và sang trọng, Cater Ease Palace Cảnh Hồ còn được biết tới là trung tâm hội nghị tiệc cưới có không gian khán phòng lớn nhất tại Hà Nội hiện nay. Trung tâm tọa lạc trên đường Trường Chinh với khuôn viên rộng rãi, có khu vực hồ điều hòa, sân golf, khu vườn phía trước có thể tổ chức những bữa tiệc ngoài trời. Trống Đồng Palace Cảnh Hồ có sức chứa lên đến hàng nghìn khách, phù hợp với quy mô của mọi sự kiện, hứa hẹn mang đến những trải nghiệm hoàn hảo nhất.",
            "area": "3650 m2",
            "people": 2750,
            "address": "173B Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội",
            "open": "8h00",
            "close": "21h00",
            "days": [
                null
            ],
            "heroBanners": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131815/room_qfci0s.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131818/room1_j3bxum.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131820/room2_pmuqoy.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131822/room3_ro54oi.jpg"
            ],
            "thumbnailImages": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131825/roomthumb_zawu2a.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131826/roomthumb2_grv2gy.jpg"
            ],
            "galleryImages": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132857/glroom_bfqik3.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132858/glroom1_frw9bu.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132861/glroom2_marv8x.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132863/glroom3_ud3p27.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132865/glroom4_qd6ypg.jpg"
            ],
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751174452/glroom3_xvo3jh.jpg",
            "rooms": [
                {
                    "id": 1,
                    "name": "Phòng Star",
                    "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751129118/room_wyvfjy.jpg",
                    "area": "1320 m2",
                    "people": 1150,
                    "table": 115,
                    "price": 13000000
                }
            ]
        },
        {
            "id": 2,
            "name": "Lãng Yên",
            "slug": "lang-yen",
            "description": "Lãng Yên nằm tại vị trí đắc địa, gần trung tâm thành phố với trục giao thông thuận tiện. Không gian hiện đại với mái trần cao cùng hệ thống đèn sao ấn tượng mang đến một Trống Đồng Palace Lãng Yên sang trọng và độc đáo. Đây là địa điểm hàng đầu được lựa chọn để tổ chức những sự kiện đẳng cấp, trang trọng ngay giữa lòng thành phố.",
            "area": "1350m2",
            "people": 1150,
            "address": "2 Lãng Yên, Bạch Đằng, Hai Bà Trưng, Hà Nội",
            "open": "8h00",
            "close": "21h00",
            "days": [
                "thứ 2",
                "Chủ nhật"
            ],
            "heroBanners": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176070/yenlangbanner_bpnn9i.png"
            ],
            "thumbnailImages": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176072/langyen_dazjr1.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176075/langyen1_zefycv.jpg"
            ],
            "galleryImages": [],
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176077/yenlangbanner_wcmeie.png",
            "rooms": []
        },
        {
            "id": 3,
            "name": "Hoàng Quốc Việt",
            "slug": "hoang-quoc-viet",
            "description": "Được thiết kế mới lạ và ấn tượng, Trống Đồng Palace Hoàng Quốc Việt mang hơi hướng của nền văn hoá cổ đại với 2 phòng tiệc được đặt theo tên của vị nữ thần xinh đẹp quyến rũ Athena. Ẩm thực tại Trống Đồng Palace Hoàng Quốc Việt những món ăn truyền thống nhưng được chế biến theo phong cách mới lạ, đa dạng, chiều lòng những vị thực khách khó tính nhất.  Với những đặc điểm và thế mạnh riêng biệt, Trống Đồng Palace Hoàng Quốc Việt là sự lựa chọn lý tưởng với các sự kiện, tiệc cưới với lượng khách mời đông đảo, các chương trình truyền hình thực tế, chương trình biểu diễn nghệ thuật quy mô lớn. Khán phòng của Trống Đồng Palace Hoàng Quốc Việt cũng là nơi được lựa chọn để tổ chức rất nhiều sự kiện được chú ý như “Tìm kiếm gương mặt người mẫu – The Face Viet Nam”, “Vietnam Mobile Day”… và rất nhiều chương trình quan trọng khác.",
            "area": "1750m2",
            "people": 1400,
            "address": "2 Lãng Yên, Bạch Đằng, Hai Bà Trưng, Hà Nội",
            "open": "8h00",
            "close": "21h00",
            "days": [
                "thứ 2",
                "Chủ nhật"
            ],
            "heroBanners": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176377/hoangquocvietbanner_eqanpw.png"
            ],
            "thumbnailImages": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176379/langyen_dg4m78.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176380/langyen1_p7vm2e.jpg"
            ],
            "galleryImages": [],
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751176382/hoangquocvietbanner_zzhbtk.png",
            "rooms": []
        },
        {
            "id": 4,
            "name": "địa điểm test",
            "slug": "ia-iem-test",
            "description": null,
            "area": "22m2",
            "people": 50,
            "address": "cau trang",
            "open": "07:00",
            "close": "12:24",
            "days": [
                "Thứ 2",
                "Thứ 3",
                "Thứ 4",
                "Thứ 5",
                "Thứ 6",
                "Thứ 7",
                "Chủ Nhật"
            ],
            "heroBanners": [],
            "thumbnailImages": [],
            "galleryImages": [],
            "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751433868/snappr-S7twrJmc_1k-unsplash_u2qo1w.jpg",
            "rooms": [
                {
                    "id": 2,
                    "name": "phòng test",
                    "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751433783/snappr-S7twrJmc_1k-unsplash_ya6idz.jpg",
                    "area": "10",
                    "people": 2,
                    "table": 2,
                    "price": 500000
                }
            ]
        }
    ]
}

export async function getDetailVenue(slug: string) {
    // try {
    //     const response = await axios.get(`${url}/${slug}`);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(slug)
    return   {
        "id": 1,
        "name": "Cảnh Hồ",
        "slug": "canh-ho",
        "description": "Không chỉ nổi bật với với lối kiến trúc tinh tế và sang trọng, Cater Ease Palace Cảnh Hồ còn được biết tới là trung tâm hội nghị tiệc cưới có không gian khán phòng lớn nhất tại Hà Nội hiện nay. Trung tâm tọa lạc trên đường Trường Chinh với khuôn viên rộng rãi, có khu vực hồ điều hòa, sân golf, khu vườn phía trước có thể tổ chức những bữa tiệc ngoài trời. Trống Đồng Palace Cảnh Hồ có sức chứa lên đến hàng nghìn khách, phù hợp với quy mô của mọi sự kiện, hứa hẹn mang đến những trải nghiệm hoàn hảo nhất.",
        "area": "3650 m2",
        "people": 2750,
        "address": "173B Trường Chinh, Khương Mai, Thanh Xuân, Hà Nội",
        "open": "8h00",
        "close": "21h00",
        "days": [
            null
        ],
        "heroBanners": [
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131815/room_qfci0s.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131818/room1_j3bxum.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131820/room2_pmuqoy.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131822/room3_ro54oi.jpg"
        ],
        "thumbnailImages": [
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131825/roomthumb_zawu2a.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751131826/roomthumb2_grv2gy.jpg"
        ],
        "galleryImages": [
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132857/glroom_bfqik3.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132858/glroom1_frw9bu.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132861/glroom2_marv8x.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132863/glroom3_ud3p27.jpg",
            "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751132865/glroom4_qd6ypg.jpg"
        ],
        "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751174452/glroom3_xvo3jh.jpg",
        "rooms": [
            {
                "id": "68601c1ec00991799602c21f",
                "name": "Phòng Star",
                "image": "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751129118/room_wyvfjy.jpg",
                "area": "1320 m2",
                "people": 1150,
                "table": 115,
                "price": 13000000
            }
        ]
    }
}

export async function createVenue(formData: FormData) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error creating venue:", error);
        return null;
    }
}

export async function editVenue(formData: FormData, id: number) {
    const userCookie = getCookie("ECTA-info");
    const userInfo: TSignIn = userCookie ? JSON.parse(userCookie) : null;

    if (!userInfo) {
        console.error("No user info found in cookie");
        return false;
    }

    const {token} = userInfo;

    try {
        const response = await axios.patch(`${url}/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error creating venue:", error);
        return null;
    }
}


export async function deleteVenue(id: number) {

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
        console.log(error);
    }
}