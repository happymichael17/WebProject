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

        <section className="relative mx-4 sm:mx-6 md:mx-auto my-6 px-2 sm:px-4 md:px-16 max-w-full md:max-w-[98%] rounded-3xl md:rounded-4xl h-64 sm:h-80 md:h-[550px] bg-gray-900 overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 inset-0 w-full h-full object-cover brightness-50"
            >
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>

            <div className="relative justify-center z-10 flex flex-col items-start max-w-full md:max-w-6xl h-full px-1 sm:px-2 md:px-4 mt-4 md:mt-20">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight">
                    Experience Genuine<br />Innovation
                </h1>

                <div className="flex w-full max-w-xs sm:max-w-md">
                    <input
                        type="text"
                        placeholder="Search for any service..."
                        className="w-full px-3 sm:px-6 py-2 sm:py-3 bg-gray-500 backdrop-blur-md text-white rounded-l-md focus:outline-none text-xs sm:text-sm"
                    />
                    <button className="bg-yellow-500 px-3 sm:px-4 rounded-r-md flex items-center justify-center">
                        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </button>
                </div>
            </div>

            <button
                onClick={togglePlayPause}
                className="absolute bottom-2 right-2 z-20 bg-red-500 rounded-full p-2 sm:p-3 text-white hover:bg-red-600 shadow-lg ring-2 sm:ring-4 ring-white"
            >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
        </section>


        // <section className="relative px-2 sm:px-4 md:px-16 max-w-full md:max-w-[98%] mx-auto rounded-3xl md:rounded-4xl h-64 sm:h-80 md:h-[550px] bg-gray-900 overflow-hidden">
        //     <video
        //         ref={videoRef}
        //         autoPlay
        //         loop
        //         muted
        //         playsInline
        //         className="absolute z-0 inset-0 w-full h-full object-cover brightness-50"
        //     >
        //         <source src="/hero_video.mp4" type="video/mp4" />
        //     </video>
        //
        //     <div className="relative justify-center z-10 flex flex-col items-start max-w-full md:max-w-6xl h-full px-1 sm:px-2 md:px-4 mt-4 md:mt-20">
        //         <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight">
        //             Experience Genuine<br />Innovation
        //         </h1>
        //
        //         <div className="flex w-full max-w-xs sm:max-w-md">
        //             <input
        //                 type="text"
        //                 placeholder="Search for any service..."
        //                 className="w-full px-3 sm:px-6 py-2 sm:py-3 bg-gray-500 backdrop-blur-md text-white rounded-l-md focus:outline-none text-xs sm:text-sm"
        //             />
        //             <button className="bg-yellow-500 px-3 sm:px-4 rounded-r-md flex items-center justify-center">
        //                 <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        //             </button>
        //         </div>
        //     </div>
        //     <button
        //         onClick={togglePlayPause}
        //         className="absolute bottom-2 right-2 z-20 bg-red-500 rounded-full p-2 sm:p-3 text-white hover:bg-red-600 shadow-lg ring-2 sm:ring-4 ring-white"
        //     >
        //         {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        //     </button>
        // </section>
    );
}


// <section className="relative px-4 md:px-16 max-w-[98%] mx-auto rounded-4xl h-96 md:h-[550px] bg-gray-900 overflow-hidden">
        //     <video ref={videoRef} autoPlay loop muted playsInline className="absolute z-0 inset-0 w-full h-full object-cover brightness-50">
        //         <source src="/hero_video.mp4" type="video/mp4" />
        //     </video>
        //
        //     <div className="relative z-10 flex flex-col items-start max-w-6xl h-full px-2 md:px-4 mt-4:0 md:mt-70 ">
        //         <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Experience Genuine<br />Innovation</h1>
        //
        //         <div className="flex max-w-md">
        //             <input type="text" placeholder="Search for any service..." className="w-full px-30 py-3 bg-gray-500  backdrop-blur-md text-white rounded-l-md focus:outline-none text-sm" />                    <button className="bg-yellow-500 px-4 rounded-r-md flex items-center justify-center">
        //             <Search className="h-5 w-5 text-white" />
        //         </button>
        //         </div>
        //     </div>
        //     <button
        //         onClick={togglePlayPause}
        //         className="absolute bottom-1 right-1 z-20 bg-red-500 rounded-full p-3 text-white hover:bg-red-600 shadow-lg ring-4 ring-white"
        //     >
        //         {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        //     </button>
        // </section>


// src/components/HeroSection.tsx
// import { useState, useRef } from "react";
// import { Search, Pause, Play } from "lucide-react";
//
// export default function HeroSection() {
//     const [isPlaying, setIsPlaying] = useState(true);
//     const videoRef = useRef<HTMLVideoElement>(null);
//
//     const togglePlayPause = () => {
//         const video = videoRef.current;
//         if (video) {
//             if (isPlaying) video.pause();
//             else video.play();
//             setIsPlaying(!isPlaying);
//         }
//     };
//
//     return (
//
//         <section className="relative px-4 md:px-16 max-w-[98%] mx-auto rounded-4xl h-96 md:h-[550px] bg-gray-900 overflow-hidden">
//             <video ref={videoRef} autoPlay loop muted playsInline className="absolute z-0 inset-0 w-full h-full object-cover brightness-50">
//                 <source src="/hero_video.mp4" type="video/mp4" />
//             </video>
//
//             <div className="relative z-10 flex flex-col items-start max-w-6xl h-full px-2 md:px-4 mt-4:0 md:mt-70 ">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Experience Genuine<br />Innovation</h1>
//
//                 <div className="flex max-w-md">
//                     <input type="text" placeholder="Search for any service..." className="w-full px-30 py-3 bg-gray-500  backdrop-blur-md text-white rounded-l-md focus:outline-none text-sm" />                    <button className="bg-yellow-500 px-4 rounded-r-md flex items-center justify-center">
//                         <Search className="h-5 w-5 text-white" />
//                     </button>
//                 </div>
//             </div>
//             <button
//                 onClick={togglePlayPause}
//                 className="absolute bottom-1 right-1 z-20 bg-red-500 rounded-full p-3 text-white hover:bg-red-600 shadow-lg ring-4 ring-white"
//             >
//                 {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             </button>
//         </section>
//     );
// }
