import { useRef, useState, useEffect } from 'react';

export default function TrustedBrands() {
    const brands = [
        {name: "Greenish", logo: "/greenish.svg"},
        {name: "Mindfulness", logo: "/mindfulness.svg"},
        {name: "Leafe", logo: "/leafe.svg"},
        {name: "Automation", logo: "/automation.svg"},
        {name: "Leafe", logo: "/leafe.svg"},
        {name: "Automation", logo: "/automation.svg"},
        {name: "Leafe", logo: "/leafe.svg"},
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
        <section className="py-8 px-4 sm:py-10 md:py-12 container mx-auto w-full">
            <div className="flex flex-col items-center">
                {/* Title section */}
                <div className="mb-6 text-center w-full">
                    <h2 className="text-xl font-bold text-gray-800 leading-tight">
                        Trusted by Leading<br className="sm:hidden" /> Brands
                    </h2>
                </div>

                {/* Logos section - scrollable on mobile */}
                <div
                    ref={scrollContainerRef}
                    className="w-full overflow-x-auto pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    <div className="flex space-x-6 md:space-x-8 min-w-max md:min-w-0 md:flex-wrap md:justify-center px-4">
                        {brands.map((brand, index) => (
                            <div key={index} className="flex items-center flex-shrink-0">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="h-8 sm:h-10 md:h-12 opacity-100 grayscale"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile scroll indicator dots */}
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
