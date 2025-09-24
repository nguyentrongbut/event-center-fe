// ** React router
import {Link} from "react-router-dom";

// ** Components
import Container from "@/components/common/container.tsx";
import {Heading} from "@/components/typography";
import {Button} from "@/components/ui/button.tsx";

// ** Pages
import Banner from "@/pages/client/Home/components/banner.tsx";

const AboutSection = () => {
    return (
        <div className='bg-primaryColor'>
            <Container>
                <section className='py-[50px] sm:pt-[202px] sm:pb-[100px]'>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <div className='w-full sm:w-[50%]'>
                            <Banner image="/about-img.png"/>
                        </div>
                        <div className='w-full sm:w-[44%] mt-24 sm:mt-0'>
                            <Heading as='h2' title='About Event Center' className='mb-4'/>
                            <p className="text-lg text-[#191720] mb-4 leading-relaxed">
                                At Event Center, we believe every celebration deserves to be
                                special. From birthdays and weddings to corporate gatherings,
                                our platform helps you plan and book the perfect event with ease
                                and convenience.
                            </p>

                            <p className="text-lg text-[#191720] leading-relaxed">
                                With a user-friendly interface and a dedicated support team, we
                                make organizing events effortless. Our mission is to bring your
                                vision to life, ensuring memorable experiences for you and your
                                guests.
                            </p>
                            <Link to='/about-us'>
                                <Button className='sm:text-lg font-bold mt-[38px] sm:py-8 sm:px-6'>Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default AboutSection