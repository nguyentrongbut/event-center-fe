// ** Axios
// import axios from "axios";

// ** Configs
// import {CONFIG_API} from "@/configs/api.ts";

// ** types
// import type {TEvent} from "@/types/data";

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