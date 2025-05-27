import { useRef, useState, useEffect } from 'react';

export default function PlatformsWeDevelopFor() {
    const brands = [
        { name: "Greenish", logo: "/greenish.svg" },
        { name: "Mindfulness", logo: "/mindfulness.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState(0);
    const totalSections = 3; // Number of scroll sections/dots

    // Handle scroll to update active dot
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
        const newActiveSection = Math.min(
            totalSections - 1,
            Math.floor(scrollPercentage * totalSections)
        );

        setActiveSection(newActiveSection);
    };

    // Add scroll event listener
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            return () => scrollContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="sm:p-6 lg:p-12 container mx-auto">
            <div className="container mx-auto px-4">
                {/* Combined row for title and logos */}
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Title section */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight 
                        mb-4 md:mb-0 md:mr-8 flex-shrink-0 text-center md:text-left">
                        Platforms We Develop For:
                    </h2>

                    {/* Logos section */}
                    <div className="flex-grow w-full md:w-auto">
                        <div
                            ref={scrollContainerRef}
                            className="w-full overflow-x-auto md:overflow-x-visible pb-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <style>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>

                            {/* Content container - scrollable on mobile, fixed on desktop */}
                            <div className="flex space-x-6 md:space-x-4 lg:space-x-6 min-w-max md:min-w-0 md:justify-start">
                                {brands.map((brand, index) => (
                                    <div key={index} className="flex items-center flex-shrink-0 md:flex-shrink">
                                        <img
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            className="h-10 sm:h-12 md:h-14 lg:h-16 opacity-100 grayscale"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container for scroll indicator dots - only visible on mobile */}
                <div className="flex justify-center space-x-2 mt-4 md:hidden">
                    {Array.from({ length: totalSections }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    const { scrollWidth, clientWidth } = scrollContainerRef.current;
                                    const scrollAmount = (scrollWidth - clientWidth) * (index / (totalSections - 1));
                                    scrollContainerRef.current.scrollTo({
                                        left: scrollAmount,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                index === activeSection ? 'bg-gray-700' : 'bg-gray-300'
                            }`}
                            aria-label={`Scroll to section ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}