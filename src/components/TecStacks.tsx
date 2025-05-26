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
        <section className="container sm:p-6 lg:p-12 mx-auto w-full ">
            <div className="flex flex-row md:flex-row gap-6 ">
                <h2 className="text-lg md:text-2xl text-black font-bold text-center md:text-left mb-4 ">
                    Technology <br /> Index
                </h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={service.icon}
                                alt="Technology Icon"
                                className="w-10 h-10 md:w-14 md:h-14"
                            />
                        </div>
                    ))}
                </div>

                {/*<div className=" flex flex-row w-full mx-auto  gap-4 md:gap-6">*/}
                {/*    {services.map((service, index) => (*/}
                {/*        <div*/}
                {/*            key={index}*/}
                {/*        >*/}
                {/*            <img*/}
                {/*                src={service.icon}*/}
                {/*                alt="Technology Icon"*/}
                {/*                className="w-10 h-10 md:w-14 md:h-14"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>

            <div
                className="relative text-white bg-gray-800 rounded-2xl py-8  md:py-12 md:px-6 text-center space-y-4 mx-auto mt-8 overflow-hidden"
                style={{
                    backgroundImage: `url('/get_in_touch_2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                <div className="absolute container sm:p-6 lg:p-12 mx-auto w-full  inset-0 w-full h-full bg-black opacity-70 z-0"></div>
                     <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        Start Your Next Project with Africa&apos;s Best Talent
                         </h3>
                    <button className="bg-red-500 text-white py-2 px-6 rounded-full  hover:bg-red-600 transition-colors duration-200 flex items-center gap-2">
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

// import {ArrowRight} from "lucide-react";
//
// export default function TecStacks() {
//     const services = [
//         {icon: '/java.svg'},
//         {icon: '/materialize.svg'},
//         {icon: '/nodejs.svg'},
//         {icon: '/rails.svg'},
//         {icon: '/redux.svg'},
//         {icon: '/codeigniter.svg'},
//     ];
//
//     return (
//         <section className="py-12 px-8">
//             <div className="flex flex-wrap justify-center gap-6 items-center">
//                 <h2 className="text-lg text-black font-bold">Technology <br/> Index</h2>
//                 {services.map((service, index) => (
//                     <div key={index} className="bg-white rounded-xl p-6 flex flex-col items-center">
//                         <img src={service.icon} alt="Technology Icon"/>
//                     </div>
//                 ))}
//             </div>
//
//             <div
//                 className="relative text-white bg-gray-800 rounded-2xl py-8 px-6 text-center space-y-4 max-w-4xl mx-auto overflow-hidden"
//                 style={{
//                     backgroundImage: `url('/get_in_touch_2.jpg')`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'top center',
//                 }}
//             >
//                 <div className="absolute inset-0 w-full h-full bg-black opacity-70 z-0"></div>
//                 <div className="relative z-10">
//                     <h3 className="text-2xl font-semibold">Start Your Next Project with Africa's Best Talent</h3>
//                     <button className="bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600">
//                         <div className="flex items-center justify-center gap-2">
//                             <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
//                                 <ArrowRight className="w-3 h-4" />
//                             </div>
//                             <span className="text-sm fa-font-awesome">Get in Touch</span>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//
//         </section>
//     );
// }
