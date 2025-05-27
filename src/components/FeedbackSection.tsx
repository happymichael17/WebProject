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
        <div style={{ background: '#F3A81C0A' }} className="py-8 px-4 sm:py-12">
            <section className="container mx-auto w-full">
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6 md:mb-10">
                    Happy Customers Say
                </h2>

                <div className="flex justify-center items-center gap-4 overflow-hidden">
                    {/* Navigation button - hidden on mobile */}
                    <button
                        onClick={handlePrevious}
                        className="hidden md:block p-2 rounded-full hover:bg-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-gray-600" />
                    </button>

                    <div className="relative w-full max-w-2xl h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] flex items-center justify-center px-2 sm:px-4">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4 }}
                                className="absolute rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex flex-col items-center border border-gray-300 bg-white/60 w-full"
                                // Add swipe handlers for mobile
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(_e, { offset}) => {
                                    const swipe = offset.x;

                                    if (swipe < -50) {
                                        handleNext();
                                    } else if (swipe > 50) {
                                        handlePrevious();
                                    }
                                }}
                            >
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={`Customer ${currentIndex + 1}`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-3 sm:mb-4"
                                />
                                <p className="text-center text-black font-semibold text-sm sm:text-base md:text-lg">
                                    — {testimonials[currentIndex].name}
                                    <span className="font-normal"> {testimonials[currentIndex].role}</span>
                                </p>
                                <p className="text-gray-600 text-center mt-2 relative text-xs sm:text-sm md:text-base px-5 sm:px-8">
                                    <FontAwesomeIcon
                                        icon={faQuoteLeft}
                                        className="absolute -left-1 sm:-left-3 top-0 text-yellow-400 text-sm sm:text-lg md:text-xl"
                                    />
                                    {testimonials[currentIndex].text}
                                    <FontAwesomeIcon
                                        icon={faQuoteRight}
                                        className="absolute -right-1 sm:-right-3 bottom-0 text-yellow-400 text-sm sm:text-lg md:text-xl"
                                    />
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation button - hidden on mobile */}
                    <button
                        onClick={handleNext}
                        className="hidden md:block p-2 rounded-full hover:bg-gray-100"
                        aria-label="Next testimonial"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-2xl text-gray-600" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-3 sm:mt-4">
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
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
