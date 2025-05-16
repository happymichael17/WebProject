import {ArrowRight} from "lucide-react";

export default function TecStacks() {
    const services = [
        {icon: '/java.svg'},
        {icon: '/materialize.svg'},
        {icon: '/nodejs.svg'},
        {icon: '/rails.svg'},
        {icon: '/redux.svg'},
        {icon: '/codeigniter.svg'},
    ];

    return (
        <section className="py-12 px-4">
            <div className="flex flex-wrap justify-center gap-6 items-center">
                <h2 className="text-lg text-black font-bold">Technology <br/> Index</h2>
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 flex flex-col items-center">
                        <img src={service.icon} alt="Technology Icon"/>
                    </div>
                ))}
            </div>

            <div
                className="relative text-white bg-gray-800 rounded-2xl py-8 px-6 text-center space-y-4 max-w-4xl mx-auto overflow-hidden"
                style={{
                    backgroundImage: `url('/get_in_touch_2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-0"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-semibold">Start Your Next Project with Africa's Best Talent</h3>
                    <button className="bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
                                <ArrowRight className="w-3 h-4" />
                            </div>
                            <span className="text-sm fa-font-awesome">Get in Touch</span>
                        </div>
                    </button>
                </div>
            </div>

        </section>
    );
}
