// ** React
import React from "react";

// ** React router
import {Link} from "react-router-dom";

// ** Configs
import {eventTypes} from "@/configs/pages.tsx";

const NavMenuFood = ({ slug }: { slug?: string }) => {
    return (
        <nav className="absolute -bottom-[6%] left-1/2 -translate-x-1/2 w-full px-4 max-w-[570px]">
            <div className="bg-white rounded-lg shadow-xl overflow-x-auto">
                <div className="inline-flex items-center whitespace-nowrap min-w-max">
                    {eventTypes.map((event, index) => (
                        <React.Fragment key={event.id}>
                            <Link
                                to={`/menu/${event.slug}`}
                                className={`p-6 cursor-pointer hover:text-primary transition-colors ${
                                    slug === event.slug ? "text-primary" : ""
                                }`}
                            >
                                {event.nameVi}
                            </Link>
                            {index < eventTypes.length - 1 && (
                                <span className="w-[1px] h-8 bg-gray-300" />
                            )}
                        </React.Fragment>
                    ))}

                    <span className="w-[1px] h-8 bg-gray-300" />

                    <Link
                        to="/menu"
                        className={`p-6 cursor-pointer hover:text-primary transition-colors ${
                            !slug ? "text-primary" : ""
                        }`}
                    >
                        Tất cả
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavMenuFood;
