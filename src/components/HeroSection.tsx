// src/components/HeroSection.tsx
import { useState, useRef } from "react";
import { Search, Pause, Play } from "lucide-react";

export default function HeroSection() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) video.pause();
            else video.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="relative p-4 max-w-8xl mx-auto rounded-lg h-96 md:h-[550px] bg-gray-900 overflow-hidden">
            <video ref={videoRef} autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover brightness-50">
                <source src="https://cdnjs.cloudflare.com/ajax/libs/media-visual-library/1.0.0/placeholders/video-placeholder.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10 flex flex-col items-start justify-center max-w-6xl h-full px-6 md:px-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Experience Genuine<br />Innovation</h1>

                <div className="flex max-w-md">
                    <input type="text" placeholder="Search for any service..." className="w-full px-4 py-3 bg-gray-800 bg-opacity-80 text-white rounded-l-md focus:outline-none text-sm" />
                    <button className="bg-yellow-500 px-4 rounded-r-md flex items-center justify-center">
                        <Search className="h-5 w-5 text-gray-800" />
                    </button>
                </div>
            </div>

            <button onClick={togglePlayPause} className="absolute bottom-6 right-6 z-20 bg-red-500 rounded-full p-3 text-white hover:bg-red-600">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
        </section>
    );
}
