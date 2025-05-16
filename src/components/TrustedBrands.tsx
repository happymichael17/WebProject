// src/components/TrustedBrands.tsx

export default function TrustedBrands() {
    const brands = [
        {name: "Greenish", logo: "/greenish.svg"},
        {name: "Mindfulness", logo: "/mindfulness.svg"},
        {name: "Leafe", logo: "/leafe.svg"},
        {name: "Automation", logo: "/automation.svg"},
        {name: "Leafe", logo: "/leafe.svg"},
        {name: "Automation", logo: "/automation.svg"},
    ];

    return (
        <section className="py-16 px-16 md:px-16  bg-white">
            <div className="flex flex-col md:flex-row justify-center  gap-6 md:gap-26">
                <div>
                    <h2 className="text-lg font-bold text-gray-800 leading-tight">Trusted by Leading<br/>Brands</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center flex-shrink-0">
                            <img src={brand.logo} alt={`${brand.name} logo`}
                                 className="h-10 md:h-12 opacity-100 grayscale"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
