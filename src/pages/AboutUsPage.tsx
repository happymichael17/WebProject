import Footer from "../components/Footer.tsx";
import Navbar from '../components/Navbar';
import PlatformsWeDevelopFor from "../components/PlatformsWeDevelopFor";
import InnovationSection from "../components/innovationSection.tsx";
import LeadershipSection from "../components/leadershipSection.tsx";
import MissionAndBenefitsSection from "../components/MissionVision.tsx";

export default function AboutUsPage() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar />
            <InnovationSection />
            <PlatformsWeDevelopFor />
            <MissionAndBenefitsSection />
            <LeadershipSection />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}