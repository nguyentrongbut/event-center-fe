// ** Components
import Container from "@/components/common/container.tsx";
import Logo from "@/components/common/logo.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";

// ** React router
import {Link} from "react-router-dom";

// ** Configs
import {contacts, services, socials, supports} from "@/configs/layout.tsx";

const Footer = () => {
    return (
        <footer className="bg-primaryColor  py-7">
            <Container>
                <div className="grid md:grid-cols-4 gap-8 mt-10">
                    <div>
                        <Logo className=""/>
                        <p className="text-thirdColor mb-4 mt-3.5">Vietnam&apos;s leading event booking platform</p>
                        <div className="flex space-x-3">
                            {socials.map(({ icon: Icon, href, variant }, idx) => (
                                <Link
                                    key={idx}
                                    to={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="icon" variant={variant as "default" | "secondary"}>
                                        <Icon className="size-5" />
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-thirdColor">
                            {services.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className="hover:text-black">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-thirdColor">
                            {supports.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className="hover:text-black">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-thirdColor">
                            {contacts.map(({ icon: Icon, text, href }) => (
                                <Link
                                    key={text}
                                    to={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center cursor-pointer hover:text-black"
                                >
                                    <Icon className="size-4 mr-2" />
                                    <span>{text}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copy right */}
                <div className="mt-8 pt-8 border-t border-black text-center text-thirdColor">
                    <p>&copy; {new Date().getFullYear()} Ever Event. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer