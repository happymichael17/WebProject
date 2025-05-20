import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import HeroSectionEcitizen from "../components/HeroSectionEcitizen.tsx";

export function EcitizenDetails() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar/>
            <HeroSectionEcitizen/>
            <div className="mt-auto">
                <Footer/>
            </div>
        </div>
    );
}