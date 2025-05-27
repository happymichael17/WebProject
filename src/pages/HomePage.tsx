import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CaseStudiesSection from "../components/LiveProjects";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/products";
import TecStacks from "../components/TecStacks";
import TrustedBrands from "../components/TrustedBrands";
import WhoWeServeSection from "../components/WhoWeServe";


export default function HomePage() {
    return (

       <div className="min-h-screen bg-white w-full max-w-full sm:px-0 md:px-0">
            <Navbar/>
            <HeroSection/>
            <TrustedBrands/>
            <ServicesSection/>
            <AboutSection/>
            <CaseStudiesSection/>
            <WhoWeServeSection/>
            <TestimonialsSection/>
            <TecStacks/>
            <Footer/>
        </div>
    );
}