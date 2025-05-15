
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBrands from "./components/TrustedBrands";

// Main App Component
export default function App() {
    return (
        <div className="min-h-screen bg-white w-full max-w-full">
            <Navbar />
            <HeroSection />
            <TrustedBrands />
        </div>
    );
}