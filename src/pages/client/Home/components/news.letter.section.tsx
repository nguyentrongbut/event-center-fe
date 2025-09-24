// ** Components
import {Heading} from "@/components/typography";
import ImgWPlaceholder from "@/components/common/img.w.placeholder.tsx";

// ** Shadcn ui
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";


const NewsLetterSection = () => {
    return (
      <div className='pt-[50px] sm:pt-[160px] relative overflow-hidden'>
          <section className='bg-[#29B067] text-white px-[18px] relative'>
              <div className='py-[100px]'>
                  <div className='z-10 flex justify-center relative'>
                      <div className='lg:w-[39.5%] text-center'>
                          <Heading as='h2' title='Subscribe newsletter to get updates'/>
                          <p className='text-lg mt-[18px]'>Order online on our website for faster checkout and
                              personalised recommendations.</p>
                          <div className='flex flex-col sm:flex-row gap-5 h-[60px] mt-[38px]'>
                              <Input className='p-[15px] h-full text-lg bg-white border-none text-[#575363]'
                                     placeholder='Enter your email'/>
                              <Button
                                  className='h-full text-lg px-[35px] bg-[#FFCF54] text-black hover:bg-[#FFCF54]/90 font-semibold'>Subscribe</Button>
                          </div>
                      </div>
                  </div>
                  {/* bg after*/}
                  <ImgWPlaceholder className='absolute top-0 left-1/2 -translate-x-1/2 h-full' src="/news-letter.png" alt=""/>

                  {/* hamburger*/}
                  <ImgWPlaceholder src="/hamburger.png" alt=""
                       className='absolute size-[264px] -left-24 -top-[26%] hidden sm:block z-20'/>

                  {/*  pizza */}
                  <ImgWPlaceholder
                      src="/pizza.png"
                      alt=""
                      className='absolute size-[264px] top-1/2 -translate-y-1/2 -right-36 sm:block z-0'
                  />
              </div>
          </section>
      </div>
    )
}

export default NewsLetterSection