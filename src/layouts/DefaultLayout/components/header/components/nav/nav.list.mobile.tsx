// ** types
import type {TLink} from "@/types";

// ** react router
import {Link} from "react-router-dom";

const NavListMobile = ({list}: { list: TLink[] }) => {
    return (
        <>
            {list.map((item, index) => (
                <Link key={index} to={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                </Link>
            ))}
        </>
    );
};

export default NavListMobile;
