import Footer from "../components/Footer.tsx";
import Navbar from '../components/Navbar';
import PlatformsWeDevelopFor from "../components/PlatformsWeDevelopFor";
import MissionVision from "../components/MissionVision.tsx";
import InnovationSection from "../components/innovationSection.tsx";
import LeadershipSection from "../components/leadershipSection.tsx";

export default function AboutUsPage() {
    return (
        <div className="bg-white w-full max-w-full flex flex-col min-h-screen">
            <Navbar />
            <InnovationSection />
            <PlatformsWeDevelopFor />
            <MissionVision />
            <LeadershipSection />
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}