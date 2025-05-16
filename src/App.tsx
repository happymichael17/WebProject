
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBrands from "./components/TrustedBrands";
import ServicesSection from "./components/products.tsx";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import CaseStudiesSection from "./components/LiveProjects.tsx";
import WhoWeServeSection from "./components/WhoWeServe.tsx";
import TestimonialsSection from "./components/FeedbackSection.tsx";
import TecStacks from "./components/TecStacks.tsx";

// Main App Component
export default function App() {
    return (
        <div className="min-h-screen bg-white w-full max-w-full">
            <Navbar/>
            <HeroSection/>
            <TrustedBrands/>
            <ServicesSection/>
            <AboutSection/>
            <CaseStudiesSection/>
            <WhoWeServeSection/>
           <TestimonialsSection/>
            <TecStacks/>
            <Footer />
        </div>
    );
}