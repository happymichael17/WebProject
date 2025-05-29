import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import HeroSectionEcitizen from "../components/HeroSectionEcitizen.tsx";
import CaseStudiesDetails from "../components/CaseStudiesDetails.tsx";
import BackToTop from "../components/BackToTop.tsx";

export function EcitizenDetails() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar/>
            <HeroSectionEcitizen/>
            <CaseStudiesDetails/>
            <BackToTop/>
            <div className="mt-auto">
                <Footer/>
            </div>
        </div>
    );
}