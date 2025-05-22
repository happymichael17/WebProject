
export default function AboutSection() {
    const awards = 24;
    const guides = 20;

    const features = [
        {
            icon: "/user.svg",
            title: "Dedicated Team",
            description: "Assemble a team of specialists that fit the needs of your project. Retain full control while selecting which parts of the development process should be outsourced.",
        },
        {
            icon: "/cloud-data.svg",
            title: "Technology Partner",
            description: "Free up your time by delegating all of the work on your IT initiatives from market research & requirements analysis to UI/UX design, development, and support.",
        },
        {
            icon: "/award.svg",
            title: "Staff Augmentation",
            description: "Struggling to find experts to bridge a skills gap within your existing staff? Don’t worry. Our experts can seamlessly integrate into your team.",
        },
    ];

    return (
        <section className="py-1 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-4 items-center-safe" style={{ backgroundColor: "#F3A81C0A" }}>
            <div className="relative px-4 py-8 md:px-8">
                <img src="/projectscompleted.svg" alt="Professional working" className="rounded-2xl object-cover w-full h-auto" />
                <div className="absolute top-8 left-6 md:top-14 md:left-10 md:p-8">
                    <img src="/review_image_about.svg" alt="Star" className="w-16 h-16 md:w-full md:h-full" />
                </div>

                <div className="absolute top-20 right-6 md:top-34 md:right-24 text-white">
                    <p className="text-xl md:text-4xl font-bold">{awards}+</p>
                    <p className="text-sm md:text-lg">Worldwide <br /> Awards</p>
                </div>

                <div className="absolute bottom-8 left-6 md:bottom-16 md:left-24 text-white">
                    <p className="text-2xl md:text-4xl font-bold">{guides}+</p>
                    <p className="text-sm md:text-lg">Professional <br /> Guides</p>
                </div>
            </div>

            <div>
                <h2 className="text-xl md:text-3xl font-bold text-black mb-6 px-0 md:px-16">
                    Getting started is easy, connect with top African tech talent efficiently.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 mb-4">
                            <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg text-black font-bold">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

//
// export default function AboutSection() {
//     const awards = 24;
//     const guides = 20;
//
//     const features = [
//         {
//             icon: "/user.svg",
//             title: "Dedicated Team",
//             description: "Assemble a team of specialists that fit the needs of your project. Retain full control while selecting which parts of the development process should be outsourced.",
//         },
//         {
//             icon: "/cloud-data.svg",
//             title: "Technology Partner",
//             description: "Free up your time by delegating all of the work on your IT initiatives from market research & requirements analysis to UI/UX design, development, and support.",
//         },
//         {
//             icon: "/award.svg",
//             title: "Staff Augmentation",
//             description: "Struggling to find experts to bridge a skills gap within your existing staff? Don’t worry. Our experts can seamlessly integrate into your team.",
//         },
//     ];
//
//     return (
//         <section className="py-1 px-16 grid grid-cols-2 md:grid-cols-2 gap-2 items-center-safe" style={{ backgroundColor: "#F3A81C0A" }}>
//             <div className="relative px-8 py-8">
//                 <img src="/projectscompleted.svg" alt="Professional working" className="rounded-2xl object-cover" />
//                 <div className="absolute top-14 left-10 md:p-8">
//                     <img src="/review_image_about.svg" alt="Star" className="w-full h-full" />
//                 </div>
//
//                 <div className="absolute top-34 right-90 text-white ">
//                     <p className="text-2xl md:text-4xl font-bold">{awards}+</p>
//                     <p className="text-base md:text-lg">Worldwide <br /> Awards</p>
//                 </div>
//
//                 <div className="absolute bottom-16 left-26 text-white ">
//                     <p className="text-4xl md:text-4xl font-bold">{guides}+</p>
//                     <p className="text-base md:text-lg">Professional <br /> Guides</p>
//                 </div>
//             </div>
//
//             <div>
//                 <h2 className="text-2xl px-16 md:text-3xl font-bold text-black mb-6">Getting started is easy, connect with top African tech talent efficiently.</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 px-16 gap-4">
//                     {features.map((feature, index) => (
//                         <div key={index} className="flex items-start space-x-4">
//                             <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
//                             <div>
//                                 <h3 className="text-lg text-black font-bold">{feature.title}</h3>
//                                 <p className="text-gray-600">{feature.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }