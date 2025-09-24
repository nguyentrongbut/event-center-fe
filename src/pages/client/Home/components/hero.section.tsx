// ** React Router
import {Link} from "react-router-dom";

// ** Components
import Container from "@/components/common/container.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";

// ** Pages
import Banner from "@/pages/client/Home/components/banner.tsx";


const HeroSection = () => {
    return (
        <div className='bg-primaryColor'>
            <Container>
                <section className='flex flex-col sm:flex-row justify-between items-center pb-[100px] pt-[52px]'>
                    <div className='w-full sm:w-[44%]'>
                        <div className='text-primary mb-3 text-lg font-medium'>#Your Party, Our Care</div>
                        <h1 className='font-semibold text-[70px] text-[#191720] leading-[74px] roboto-serif'>
                            Book Your Party Online in Just Minutes
                        </h1>
                        <p className='text-lg text-[#191720] mt-6 mb-10'>
                            Quick, fun, and easy – plan your celebrations anytime, anywhere with just a few clicks.
                        </p>
                        <Link to='/booking'>
                            <Button size='full' className='text-lg font-semibold'>Booking Now</Button>
                        </Link>
                    </div>
                    <div className='w-full sm:w-[44%] mt-[50px] sm:mt-0'>
                        <Banner image="/hero-img.png" />
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default HeroSection