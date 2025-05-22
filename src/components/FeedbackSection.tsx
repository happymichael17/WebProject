import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function TestimonialsSection() {
    return (
        <section className="py-8 px-4 md:py-12 md:px-8 mx-auto w-full" style={{ background: '#F3A81C0A' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Happy Customers Say</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
                    <div className="rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-300 bg-white/60">
                        <img src="/woman_photo.svg" alt="Customer 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4" />
                        <p className="text-center text-black font-semibold text-base md:text-lg">— Jane M.<span className="font-normal"> CEO, Tech Solutions Ltd</span></p>
                        <p className="text-gray-600 text-center mt-2 relative text-sm md:text-base">
                            <FontAwesomeIcon icon={faQuoteLeft} className="absolute -left-4 top-0 text-yellow-400 text-lg md:text-xl" />
                            Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!
                            <FontAwesomeIcon icon={faQuoteRight} className="absolute -right-4 bottom-0 text-yellow-400 text-lg md:text-xl" />
                        </p>
                    </div>

                    <div className="rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-300 bg-white/60">
                        <img src="/man_photo.svg" alt="Customer 2" className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4" />
                        <p className="text-center text-black font-semibold text-base md:text-lg">— John D.<span className="font-normal"> CEO, Tech Innovations Ltd</span></p>
                        <p className="text-gray-600 text-center mt-2 relative text-sm md:text-base">
                            <FontAwesomeIcon icon={faQuoteLeft} className="absolute -left-4 top-0 text-yellow-400 text-lg md:text-xl" />
                            Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!
                            <FontAwesomeIcon icon={faQuoteRight} className="absolute -right-4 bottom-0 text-yellow-400 text-lg md:text-xl" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
//
// export default function TestimonialsSection() {
//     return (
//         <section className=" py-6 px-8 mx-auto" style={{ background: '#F3A81C0A' }}>
//             <h2 className="text-3xl font-bold text-black text-center mb-12">Happy Customers Say</h2>
//             <div className="flex justify-center">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
//                     <div className=" rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-300" style={{ backgroundColor: '#F3A81C0A' }}>
//                         <img src="/woman_photo.svg" alt="Customer 1" className="w-20 h-20 rounded-full mb-4" />
//                         <p className="text-center text-black font-semibold">— Jane M.CEO, Tech Solutions Ltd</p>
//                         <p className="text-gray-600 text-center mt-2 relative">
//                             <FontAwesomeIcon icon={faQuoteLeft} className="absolute -left-4 top-0 text-yellow-400" />
//                             Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for an...
//                             <FontAwesomeIcon icon={faQuoteRight} className="absolute -right-4 bottom-0 text-yellow-400" />
//                         </p>
//                     </div>
//
//                     <div className=" rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-300" style={{ backgroundColor: '#F3A81C0A' }}>
//                         <img src="/man_photo.svg" alt="Customer 2" className="w-20 h-20 rounded-full mb-4" />
//                         <p className="text-center text-black font-semibold">— John D.CEO, Tech Innovations Ltd</p>
//                         <p className="text-gray-600 text-center mt-2 relative">
//                             <FontAwesomeIcon icon={faQuoteLeft} className="absolute -left-4 top-0 text-yellow-400" />
//                             Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for an...
//                             <FontAwesomeIcon icon={faQuoteRight} className="absolute -right-4 bottom-0 text-yellow-400" />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
