// ** React router
import {Link} from "react-router-dom";

// ** Components
import {Heading} from "@/components/typography";
import Container from "@/components/common/container.tsx";
import ListMenu from "@/components/menu/list.menu.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";

// ** Types
import type {TMenu} from "@/types/data";

const MenuSection = ({menus, adminView = false} : {menus:TMenu[], adminView?: boolean}) => {
    return (
        <>

            <section className="relative bg-cover bg-center py-20"
                     style={{
                         backgroundImage: 'url("https://datcotainha24h.vn/wp-content/uploads/2022/09/Rectangle-2455.png")',
                     }}
            >
                <Heading
                    size='lg'
                    as="h4"
                    title='Suggested menu'
                    className="text-center mb-10"
                />

                {/* Background Decorations */}
                <Container>
                    <img
                        src="https://datcotainha24h.vn/wp-content/uploads/2022/09/image-44.png"
                        alt="Decoration top right"
                        className="hidden lg:block absolute top-0 right-0 w-[320px]"
                    />
                    <img
                        src="https://datcotainha24h.vn/wp-content/uploads/2022/09/image-45.png"
                        alt="Decoration bottom right"
                        className="hidden lg:block absolute bottom-0 right-0 w-[405px]"
                    />
                    <img
                        src="https://datcotainha24h.vn/wp-content/uploads/2022/09/image-43.png"
                        alt="Decoration bottom left"
                        className="hidden lg:block absolute bottom-0 left-0 w-[180px]"
                    />

                    <ListMenu
                        menus={menus}
                    />

                    {!adminView && (
                        <div className="flex justify-center">
                            <Link to="/menu/wedding" className="inline-flex mt-10 cursor-pointer">
                                <Button className="uppercase bg-primary hover:bg-primary/90">Xem tất cả</Button>
                            </Link>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
};

export default MenuSection;
