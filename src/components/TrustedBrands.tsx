// src/components/TrustedBrands.tsx

export default function TrustedBrands() {
    const brands = [
        { name: "Greenish", logo: "/api/placeholder/80/30" },
        { name: "Mindfulness", logo: "/api/placeholder/80/30" },
        { name: "Leafe", logo: "/api/placeholder/80/30" },
        { name: "Automation", logo: "/api/placeholder/80/30" },
        { name: "Leafe", logo: "/api/placeholder/80/30" },
        { name: "Automation", logo: "/api/placeholder/80/30" }
    ];

    return (
        <section className="py-8 px-6 md:px-16 bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
                <div className="md:w-1/4">
                    <h2 className="text-lg font-bold text-gray-800 leading-tight">Trusted by Leading<br />Brands</h2>
                </div>

                <div className="flex flex-wrap items-center gap-8 md:gap-12">
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
