// ** Axios
import axios from "axios";

// ** Configs
import {CONFIG_API} from "@/configs/api.ts";

// ** types
// import type {TEvent} from "@/types/data";

import {getCookie} from "@/utils/cookieUtils.ts";
import type {TSignIn} from "@/types/data";

const url = CONFIG_API.EVENT.INDEX

export async function getListEvent() {
    // try {
    //     const response: TEvent[] = await axios.get(CONFIG_API.EVENT.INDEX);
    //
    //     return response;
    // } catch (error) {
    //     console.error(error);
    //     return null;
    // }
    return [
        {
            "id": 1,
            "name": "Wedding",
            "subName": "Dịch vụ tổ chức tiệc cưới",
            "slug": "wedding",
            "description": "Cater Ease Palace là hệ thống 12 trung tâm hội nghị, tiệc cưới đẳng cấp hàng đầu miền Bắc được thiết kế với lối kiến trúc tinh tế, độc đáo cùng với không gian sang trọng và đẳng cấp. Bằng chất lượng dịch vụ chuyên nghiệp cao cấp hàng đầu, chúng tôi sẽ thắp lên xúc cảm ngọt ngào cho ngày hạnh phúc và mang đến những chất liệu tuyệt vời để viết tiếp câu chuyện tình yêu bất tận. Được phát triển và vận hành bởi đội ngũ nhân sự tâm huyết, chuyên nghiệp và giàu kinh nghiệm, Cater Ease Palace chính là nơi ghi dấu ấn hạnh phúc và mang đến thành công mỹ mãn cho sự kiện trọng đại của bạn.",
            "icon": "💒",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159168/wedding_zcxlq4.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159170/wedding1_eto3lr.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159171/wedding2_w7vzdu.jpg"
            ],
            "hot": true,
            "menus": [
                {
                    "id": 1,
                    "name": "Menu 1",
                    "price": 129000,
                    "dishes": [
                        {"id": 1, "name": "Nộm sứa ngũ sắc"},
                        {"id": 2, "name": "Gà ta hấp lá chanh"},
                        {"id": 3, "name": "Nem hải sản Phú Quốc"},
                        {"id": 4, "name": "Ếch rang muối"},
                        {"id": 5, "name": "Bê tái chanh"},
                        {"id": 6, "name": "Cá lăng chiên hoàng bào"},
                        {"id": 7, "name": "Củ quả luộc chấm muối vừng"},
                        {"id": 8, "name": "Canh ngao nấu chua"},
                        {"id": 9, "name": "Cơm Tám"},
                        {"id": 10, "name": "Xôi Hoàng Phố"}
                    ]
                }
            ],
            "services": [
                {
                    "id": 1,
                    "name": "Quay phim – chụp ảnh",
                    "price": 16500000,
                    "description": "Lace Studio – nơi ghi dấu cho bạn những khoảnh khắc đặc biệt và đầy ý nghĩa qua lăng kính của dịch vụ quay phim và chụp ảnh chuyên nghiệp...",
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
                    "description": "Tổng hợp Bộ sưu tập trang phục cưới tại Lace Bridal (Váy cưới, áo dài, vest)...",
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
                    "description": "Chúng tôi hiểu rằng mỗi cặp đôi đều có một câu chuyện riêng và mong muốn một lễ cưới lý tưởng...",
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
                    "description": "Chắc chắn rằng, ngày cưới không chỉ đơn thuần là sự kết hợp giữa hai con tim...",
                    "images": [
                        "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172116/weddingdress1_gav3da.jpg",
                        "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172118/weddingdress2_cn8scs.jpg",
                        "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172121/weddingdress1_pldxrd.jpg",
                        "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751172123/wedding2_pwjr7i.jpg"
                    ],
                    "icon": "🎯",
                    "deleted": false
                }
            ]
        },
        {
            "id": 2,
            "name": "Birthday",
            "subName": "Dịch vụ tiệc sinh nhật",
            "slug": "birthday",
            "description": "Hội tụ đầy đủ các tiêu chí về một địa điểm tổ chức tiệc sinh nhật riêng tư...",
            "icon": "🎂",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751160434/birthday_xjdoyi.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751160436/birthday1_zczqvt.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751160437/birthday2_vusfrx.jpg"
            ],
            "hot": true,
            "menus": [
                {
                    "id": 2,
                    "name": "Menu 1",
                    "price": 129000,
                    "dishes": [
                        {"id": 1, "name": "Nộm sứa ngũ sắc"},
                        {"id": 2, "name": "Gà ta hấp lá chanh"},
                        {"id": 3, "name": "Nem hải sản Phú Quốc"},
                        {"id": 4, "name": "Ếch rang muối"},
                        {"id": 5, "name": "Bê tái chanh"},
                        {"id": 6, "name": "Cá lăng chiên hoàng bào"},
                        {"id": 7, "name": "Củ quả luộc chấm muối vừng"},
                        {"id": 8, "name": "Canh ngao nấu chua"},
                        {"id": 9, "name": "Cơm Tám"},
                        {"id": 10, "name": "Xôi Hoàng Phố"}
                    ]
                }
            ],
            "services": [
                {"id": 1, "name": "Quay phim – chụp ảnh", "price": 16500000, "deleted": false},
                {"id": 3, "name": "Trang trí tiệc", "price": 18000000, "deleted": false},
                {"id": 5, "name": "Sinh nhật trọn gói", "price": 34500000, "deleted": false}
            ]
        },
        {
            "id": 3,
            "name": "Corporate Event",
            "subName": "Sự kiện doanh nghiệp",
            "slug": "corporate-event",
            "description": null,
            "icon": "🏢",
            "images": [],
            "hot": true,
            "menus": [],
            "services": []
        },
        {
            "id": 4,
            "name": "Gala Dinner",
            "subName": "Tiệc Gala",
            "slug": "gala-dinner",
            "description": null,
            "icon": "🍾",
            "images": [],
            "hot": true,
            "menus": [],
            "services": []
        }
    ]
}

export async function getDetailEvent(slug: string) {
    // try {
    //     const response = await axios.get(`${url}/${slug}`);
    //     return response;
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(slug)
    return  {
        "eventInfo": {
            "id": "68609184aa4d55051c48b911",
            "name": "Wedding",
            "subName": "Dịch vụ tổ chức tiệc cưới",
            "slug": "wedding",
            "description": "Cater Ease Palace là hệ thống 12 trung tâm hội nghị, tiệc cưới đẳng cấp hàng đầu miền Bắc được thiết kế với lối kiến trúc tinh tế, độc đáo cùng với không gian sang trọng và đẳng cấp. Bằng chất lượng dịch vụ chuyên nghiệp cao cấp hàng đầu, chúng tôi sẽ thắp lên xúc cảm ngọt ngào cho ngày hạnh phúc và mang đến những chất liệu tuyệt vời để viết tiếp câu chuyện tình yêu bất tận. Được phát triển và vận hành bởi đội ngũ nhân sự tâm huyết, chuyên nghiệp và giàu kinh nghiệm, Cater Ease Palace chính là nơi ghi dấu ấn hạnh phúc và mang đến thành công mỹ mãn cho sự kiện trọng đại của bạn.",
            "icon": "💒",
            "images": [
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159168/wedding_zcxlq4.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159170/wedding1_eto3lr.jpg",
                "https://res.cloudinary.com/dnj4p1bry/image/upload/v1751159171/wedding2_w7vzdu.jpg"
            ],
            "hot": true
        },
        "menus": [
            {
                "id": "686009cf942caea09511d4cf",
                "name": "Menu 1",
                "price": 129000,
                "dishes": [
                    {
                        "id": "685fff67942caea09511d4bc",
                        "name": "Nộm sứa ngũ sắc"
                    },
                    {
                        "id": "685fff72942caea09511d4bd",
                        "name": "Gà ta hấp lá chanh"
                    },
                    {
                        "id": "685fff7c942caea09511d4be",
                        "name": "Nem hải sản Phú Quốc"
                    },
                    {
                        "id": "685fff87942caea09511d4bf",
                        "name": "Ếch rang muối"
                    },
                    {
                        "id": "685fff90942caea09511d4c0",
                        "name": "Bê tái chanh"
                    },
                    {
                        "id": "685fff99942caea09511d4c1",
                        "name": "Cá lăng chiên hoàng bào"
                    },
                    {
                        "id": "685fffa3942caea09511d4c2",
                        "name": "Củ quả luộc chấm muối vừng"
                    },
                    {
                        "id": "685fffb4942caea09511d4c4",
                        "name": "Canh ngao nấu chua"
                    },
                    {
                        "id": "685fffbd942caea09511d4c5",
                        "name": "Cơm Tám"
                    },
                    {
                        "id": "68600017942caea09511d4c6",
                        "name": "Xôi Hoàng Phố"
                    }
                ]
            }
        ],
        "services": [
            {
                "id": "68608e56aa4d55051c48b90d",
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
                "id": "68608ed6aa4d55051c48b90e",
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
                "id": "6860908eaa4d55051c48b90f",
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
                "id": "6860911eaa4d55051c48b910",
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
            }
        ]
    }
}

export async function createEvent(formData: FormData) {
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

export async function editEvent(formData: FormData, id: number) {
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

export async function deleteEvent(id: number) {

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