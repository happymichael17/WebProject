
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TestimonialsSection() {
    const testimonials = [
        {
            image: "/woman_photo.svg",
            name: "Jane M.",
            role: "CEO, Tech Solutions Ltd",
            text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
        },
        {
            image: "/man_photo.svg",
            name: "John D.",
            role: "CEO, Tech Innovations Ltd",
            text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
        },
        // ...add more
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <div style={{ background: '#F3A81C0A' }}>
            <section className="container sm:p-6 lg:p-12 mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">
                    Happy Customers Say
                </h2>
                <div className="flex justify-center items-center gap-4 overflow-hidden">
                    <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-gray-600" />
                    </button>

                    <div className="relative w-full max-w-2xl h-[360px] flex items-center justify-center">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="absolute rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-300 bg-white/60 w-full"
                            >
                                <img src={testimonials[currentIndex].image} alt={`Customer ${currentIndex + 1}`}
                                     className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"/>
                                <p className="text-center text-black font-semibold text-base md:text-lg">
                                    — {testimonials[currentIndex].name}
                                    <span className="font-normal"> {testimonials[currentIndex].role}</span>
                                </p>
                                <p className="text-gray-600 text-center mt-2 relative text-sm md:text-base">
                                    <FontAwesomeIcon icon={faQuoteLeft}
                                                     className="absolute -left-4 top-0 text-yellow-400 text-lg md:text-xl"/>
                                    {testimonials[currentIndex].text}
                                    <FontAwesomeIcon icon={faQuoteRight}
                                                     className="absolute -right-4 bottom-0 text-yellow-400 text-lg md:text-xl"/>
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon icon={faChevronRight} className="text-2xl text-gray-600" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full ${
                                index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}








// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
// import {useState} from 'react';
//
// export default function TestimonialsSection() {
//     const testimonials = [
//         {
//             image: "/woman_photo.svg",
//             name: "Jane M.",
//             role: "CEO, Tech Solutions Ltd",
//             text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
//         },
//         {
//             image: "/man_photo.svg",
//             name: "John D.",
//             role: "CEO, Tech Innovations Ltd",
//             text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
//         },
//         {
//             image: "/man_photo.svg",
//             name: "John D.",
//             role: "CEO, Tech Innovations Ltd",
//             text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
//         },
//         {
//             image: "/man_photo.svg",
//             name: "John D.",
//             role: "CEO, Tech Innovations Ltd",
//             text: "Webmasters Kenya transformed our online presence! Their team developed a sleek, user-friendly website that boosted our customer engagement and sales. The process was smooth, communication was excellent, and they delivered beyond our expectations. Highly recommend them for any digital project!"
//         }
//     ];
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const handlePrevious = () => {
//         setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//     };
//
//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     };
//
//     return (
//         <div style={{background: '#F3A81C0A'}}>
//             <section className="container sm:p-6 lg:p-12 mx-auto w-full">
//                 <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 md:mb-12">Happy Customers
//                     Say</h2>
//                 <div className="flex justify-center items-center gap-4">
//                     <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-100">
//                         <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-gray-600"/>
//                     </button>
//
//                     <div
//                         className="rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center border border-gray-300 bg-white/60 max-w-2xl">
//                         <img src={testimonials[currentIndex].image} alt={`Customer ${currentIndex + 1}`}
//                              className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4"/>
//                         <p className="text-center text-black font-semibold text-base md:text-lg">
//                             — {testimonials[currentIndex].name}
//                             <span className="font-normal"> {testimonials[currentIndex].role}</span>
//                         </p>
//                         <p className="text-gray-600 text-center mt-2 relative text-sm md:text-base">
//                             <FontAwesomeIcon icon={faQuoteLeft}
//                                              className="absolute -left-4 top-0 text-yellow-400 text-lg md:text-xl"/>
//                             {testimonials[currentIndex].text}
//                             <FontAwesomeIcon icon={faQuoteRight}
//                                              className="absolute -right-4 bottom-0 text-yellow-400 text-lg md:text-xl"/>
//                         </p>
//                     </div>
//
//                     <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100">
//                         <FontAwesomeIcon icon={faChevronRight} className="text-2xl text-gray-600"/>
//                     </button>
//                 </div>
//
//                 <div className="flex justify-center gap-2 mt-4">
//                     {testimonials.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-2 h-2 rounded-full ${
//                                 index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }


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
