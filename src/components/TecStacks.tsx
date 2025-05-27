import { ArrowRight } from "lucide-react";

export default function TecStacks() {
    const services = [
        { icon: '/java.svg' },
        { icon: '/materialize.svg' },
        { icon: '/nodejs.svg' },
        { icon: '/rails.svg' },
        { icon: '/redux.svg' },
        { icon: '/codeigniter.svg' },
    ];

    return (
        <section className="container px-4 py-8 sm:p-6 lg:p-12 mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
                <h2 className="text-xl md:text-2xl text-black font-bold text-center sm:text-left mb-4 sm:mb-0 sm:min-w-[120px]">
                    Technology <br className="hidden sm:block" /> Index
                </h2>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img
                                src={service.icon}
                                alt="Technology Icon"
                                className="w-12 h-12 md:w-14 md:h-14"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="relative text-white bg-gray-800 rounded-2xl py-8 px-6 md:py-12 md:px-10 text-center space-y-4 mx-auto mt-10 overflow-hidden"
                style={{
                    backgroundImage: `url('/get_in_touch_2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-0"></div>
                <div className="relative z-10 flex flex-col items-center px-4">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6">
                        Start Your Next Project with Africa&apos;s Best Talent
                    </h3>
                    <button className="bg-red-500 text-white py-2.5 px-6 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full text-red-500">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                        <span className="text-sm md:text-base">Get in Touch</span>
                    </button>
                </div>
            </div>
        </section>
    );
}