import ContactUsForm from '@/components/generics/ContactUsForm'
import { Carousel } from '@/components/landing-page/Carousel'

export default function Home() {
    return (
        <section className="h-full">
            <Carousel />
            <ContactUsForm />
        </section>
    )
}
