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