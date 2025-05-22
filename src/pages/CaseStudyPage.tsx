import Footer from "../components/Footer.tsx";
import Navbar from '../components/Navbar';
import CaseStudiesFull from "../components/CaseStudiesFull.tsx";

export default function CaseStudyPage() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar />
            <CaseStudiesFull/>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}