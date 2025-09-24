// ** React router
import {Link} from "react-router-dom";

// ** Components
import Container from "@/components/common/container.tsx";
import {Heading} from "@/components/typography";

// ** Configs
import {eventTypes} from "@/configs/pages.tsx";

// ** Shadcn ui
import {Card, CardContent} from "@/components/ui/card.tsx";

const ServicesSection = () => {
    return (
        <Container>
            <section className='py-[70px] sm:pt-40 sm:pb-[200px]'>
                <div className="text-center mb-16">
                    <Heading as='h2' title='Featured Services' className='mb-4'/>
                    <p className="mx-auto sm:text-lg sm:w-[45%]">
                        We offer all-in-one solutions for every type of event – from weddings and birthdays to professional and high-end gala dinners.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-[18px] sm:gap-[30px]">
                    {eventTypes.map((eventType) => (
                        <Link
                            key={eventType.id}
                            to={`/event/${eventType.slug}`}
                            className="block w-full h-full"
                        >
                            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                                <CardContent className="pt-6 flex flex-col justify-between h-full">
                                    <div className="text-6xl mb-4">{eventType.icon}</div>
                                    <h3 className="text-[24px] font-bold  mb-1">{eventType.nameVi}</h3>
                                    <p className="line-clamp-3 mb-4">{eventType.description}</p>
                                    <Link to={`/event/${eventType.slug}`} className='font-bold text-lg hover:text-primary'>Explore</Link>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default ServicesSection;