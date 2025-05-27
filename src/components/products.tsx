import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('popular');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { id: 'all', label: 'All Services' },
        { id: 'popular', label: 'Popular Services' },
        { id: 'new', label: 'New Services' },
    ];

    const services = [
        {
            title: 'Custom Software Development',
            image: '/image1.svg',
        },
        {
            title: 'Cybersecurity Services',
            image: '/image2.svg',
        },
        {
            title: 'Mobile App Development',
            image: '/image3.svg',
        },
        {
            title: 'Digital Transformation',
            image: '/image4.svg',
        },
        {
            title: 'Digital Transformation',
            image: '/image4.svg',
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="container mx-auto w-full px-4 sm:p-6 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-black mb-4 sm:mb-6 md:mb-8">
                Browse By Services
            </h2>

            {/* Mobile Tabs - Vertical Stack */}
            <div className="sm:hidden mb-6">
                <div className="flex flex-col w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`py-2 text-left px-3 text-sm font-bold rounded-lg mb-1 ${
                                activeTab === tab.id
                                    ? 'text-white bg-red-500'
                                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop/Tablet Tabs - Horizontal */}
            <div className="hidden sm:flex justify-center mb-8 sm:mb-12 overflow-x-auto">
                <div className="border-b border-gray-200 flex space-x-6 sm:space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`pb-2 sm:pb-3 md:pb-4 px-1 text-sm sm:text-base md:text-lg font-bold whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Services Carousel */}
            <div className="relative">
                {/* Navigation Arrows - Hidden on small screens */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hidden sm:block"
                    aria-label="Scroll left"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 pb-4 snap-x snap-mandatory no-scrollbar"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl md:rounded-4xl shadow-sm p-2 sm:p-3 md:p-4 flex-none w-[220px] sm:w-[260px] md:w-[300px] snap-start"
                        >
                            <div className="mb-3 md:mb-4 overflow-hidden rounded-xl md:rounded-4xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{ objectPosition: 'top' }}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-black pr-2 md:pr-4">
                                    {service.title}
                                </h3>
                                <button
                                    className="flex items-center justify-center border rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition-colors duration-200 p-1.5 sm:p-2 w-auto h-6 sm:h-7 md:h-8"
                                    aria-label={`View ${service.title}`}
                                >
                                    <FontAwesomeIcon 
                                        icon={faArrowRight} 
                                        className="w-3 h-3 md:w-12 md:h-4"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hidden sm:block"
                    aria-label="Scroll right"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 md:w-4 md:h-5" />
                </button>
            </div>
        </section>
    );
}