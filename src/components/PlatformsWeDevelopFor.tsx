
export default function PlatformsWeDevelopFor() {
    const brands = [
        { name: "Greenish", logo: "/greenish.svg" },
        { name: "Mindfulness", logo: "/mindfulness.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
        { name: "Leafe", logo: "/leafe.svg" },
        { name: "Automation", logo: "/automation.svg" },
    ];

    return (
        <section className=" py-2 px-4 sm:px-8 md:px-16 bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center md:text-left">
                    <h2 className=" sm:text-3xl font-bold text-gray-800 leading-tight">
                        Platforms We Develop For:
                    </h2>
                </div>

                {/* Logos */}
                <div className="flex justify-start gap-6 md:gap-24">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-28 sm:w-32 md:w-36 h-16 sm:h-20"
                        >
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                className="h-full max-h-10 sm:max-h-12 object-contain opacity-100 grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



// // src/components/TrustedBrands.tsx
//
// export default function platformsWeDevelopFor() {
//     const brands = [
//         {name: "Greenish", logo: "/greenish.svg"},
//         {name: "Mindfulness", logo: "/mindfulness.svg"},
//         {name: "Leafe", logo: "/leafe.svg"},
//         {name: "Automation", logo: "/automation.svg"},
//         {name: "Leafe", logo: "/leafe.svg"},
//         {name: "Automation", logo: "/automation.svg"},
//     ];
//
//     return (
//         <section className="py-16 px-16 md:px-16  bg-white">
//             <div className="flex flex-col md:flex-row justify-center  gap-6 md:gap-26">
//                 <div>
//                     <h2 className="text-lg font-bold text-gray-800 leading-tight">Platforms We<br/>Develop For:</h2>
//                 </div>
//
//                 <div className="flex flex-wrap justify-center gap-4 md:gap-8">
//                     {brands.map((brand, index) => (
//                         <div key={index} className="flex items-center flex-shrink-0">
//                             <img src={brand.logo} alt={`${brand.name} logo`}
//                                  className="h-10 md:h-12 opacity-100 grayscale"/>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
