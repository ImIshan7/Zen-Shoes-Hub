import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { About } from '../components/About';
import { Offers } from '../components/Offers';
import { Customization } from '../components/Customization';
import { Reviews } from '../components/Reviews';
import { Blog } from '../components/Blog';
import { FAQ } from '../components/FAQ';

export function Home() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <About />
            <Offers />
            <Customization />
            <Reviews />
            <Blog />
            <FAQ />
        </>
    );
}