// src/components/TrustedBrands.tsx

export default function TrustedBrands() {
    const brands = [
        { name: "Greenish", logo: "/greenish.svg" },
        { name: "Mindfulness", logo: "/mindfulness.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
    ];

    return (
        <section className="py-16 px-16 md:px-16  bg-white">
            <div className="flex flex-col md:flex-row items-start  gap-8 md:gap-24">
                <div className="md:w-1/4">
                    <h2 className="text-lg font-bold text-gray-800 leading-tight">Trusted by Leading<br />Brands</h2>
                </div>

                <div className="flex flex-wrap justify-evenly gap-8 md:gap-12">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center">
                            <img src={brand.logo} alt={`${brand.name} logo`} className="h-6 opacity-70 grayscale" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
