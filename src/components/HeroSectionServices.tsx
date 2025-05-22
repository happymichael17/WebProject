import {ArrowRight} from "lucide-react";


export default function HeroSectionServices() {
    return (
        <section className="relative w-full px-4  md:py-2">
            <img
                src="/mobile_development_bg.svg"
                alt="Services background"
                className="w-full h-48 sm:h-64 md:h-full rounded-4xl object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start pl-2 sm:pl-4 md:pl-8 w-full h-full">

                <h1 className="text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-md text-left px-4 sm:px-8 md:px-16">
                    Mobile Development
                </h1>
                <h3 className="text-white drop-shadow-lg mb-2 text-left px-4 sm:px-8 md:px-16 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl">
                We transform your ideas into powerful, user-focused mobile solutions...
            </h3>
                <button className="bg-red-500 text-white py-3 px-4 rounded-full shadow-md hover:bg-red-600 mt-4 ml-4 sm:ml-8 md:ml-16">
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



//
// import {ArrowRight} from "lucide-react";
//
// export default function HeroSectionServices() {
//     return (
//         <section className="relative md:h-full md:w-max-auto px-4">
//             <img
//                 src="/mobile_development_bg.svg"
//                 alt="Services background"
//                 className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 w-full h-full">
//                 <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2 text-left px-16 py-4">
//                     Mobile Development
//                 </h1>
//                 <h2 className=" md:text-2 font-small text-white drop-shadow-md text-left px-16">
//                     We transform your ideas into powerful, user-focused mobile solutions. Whether you're starting with a rough concept or a <br/> detailed plan, our team guides you through every stage—strategy, design, development, <br/> testing, and final deployment—ensuring a seamless experience from start to finish.
//                 </h2>
//                <button className="bg-red-500 text-white py-3 px-4 rounded-full shadow-md hover:bg-red-600 mt-4 ml-16">
//                         <div className="flex items-center justify-center gap-2">
//                             <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
//                                 <ArrowRight className="w-3 h-4" />
//                             </div>
//                             <span className="text-sm fa-font-awesome">Request Service</span>
//                         </div>
//                 </button>
//             </div>
//         </section>
//     );
// }

// export default function HeroSectionServices() {
//
//     return (
//       <section className="md:h-full md:w-max-auto px-4">
//             <img
//                 src="/mobile_development_bg.svg"
//                 alt="Services background"
//                 className="w-full h-full "
//                 // style={{ pointerEvents: "none" }}
//             />
//           <div className=" flex flex-col items-center justify-center w-full h-full ">
//               <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2 text-center">
//                   Mobile Development
//               </h1>
//               <h2 className="text-xl md:text-2xl font-medium text-white drop-shadow-md text-center">
//                   We transform your ideas into powerful, user-focused mobile solutions. Whether you're starting with a rough concept or a detailed plan, our team guides you through every stage—strategy, design, development, testing, and final deployment—ensuring a seamless experience from start to finish.              </h2>
//           </div>
//         </section>
//     );
// }
