import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import HeroSectionServices from "../components/HeroSectionServices.tsx";
import WhoForServices from "../components/WhoForServices.tsx";
import WhatWeOffer from "../components/WhatWeOffer.tsx";


export default function ServicesPage() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar />
            <HeroSectionServices />
            <WhatWeOffer/>

            <WhoForServices/>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}