import {ArrowRight} from "lucide-react";

export default function HeroSectionServices() {
    return (
        <section className="relative w-full px-4 sm:px-6 my-6 md:py-2">
            <img
                src="/mobile_development_bg.svg"
                alt="Services background"
                className="w-full h-48 sm:h-64 md:h-full rounded-4xl object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:pl-6 md:pl-8 w-full h-full">

                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-md text-left px-2 sm:px-6 md:px-16">
                    Mobile Development
                </h1>
                <h3 className="text-white drop-shadow-lg mb-2 text-left px-2 sm:px-6 md:px-16 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl">
                    We transform your ideas into powerful, user-focused mobile solutions...
                </h3>
                <button className="bg-red-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-full shadow-md hover:bg-red-600 mt-3 sm:mt-4 ml-2 sm:ml-6 md:ml-16">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
                            <ArrowRight className="w-3 h-4" />
                        </div>
                        <span className="text-sm">Request Service</span>
                    </div>
                </button>
            </div>
        </section>
    );
}