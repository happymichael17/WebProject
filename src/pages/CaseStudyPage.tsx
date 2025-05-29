import Footer from "../components/Footer.tsx";
import Navbar from '../components/Navbar';
import CaseStudiesFull from "../components/CaseStudiesFull.tsx";
import BackToTop from "../components/BackToTop.tsx";

export default function CaseStudyPage() {
    return (
        <div className="bg-white w-full flex flex-col min-h-screen">
            {/* Full-width Navbar */}
            <div className="w-full">
                <Navbar />
            </div>

            {/* Main Content */}
            <main className="flex-grow sm:p-6 lg:p-12 w-full">
                <CaseStudiesFull />
            </main>

            {/* Full-width Footer */}
            <BackToTop/>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
