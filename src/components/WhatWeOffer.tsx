
const benefits = [
    {
        icon: <img src="/innovation.svg" alt="Innovation" className="h-16 w-16"/>,
        title: "Native and Hybrid App Development",
        description:
            "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
    },
    {
        icon: <img src="/integrity.svg" alt="Integrity" className="h-16 w-16"/>,
        title: "UI/UX design tailored for mobile",
        description:
            "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
    },
    {
        icon: <img src="/excellence.svg" alt="Excellence" className="h-16 w-16"/>,
        title: "Backend integration",
        description:
            "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
    },
    {
        icon: <img src="/collaboration.svg" alt="Collaboration" className="h-16 w-16"/>,
        title: "Testing and quality assurance",
        description:
            "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
    },
    {
        icon: <img src="/customer_centricity.svg" alt="Customer-Centricity" className="h-16 w-16"/>,
        title: "Deployment to app stores",
        description:
            "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
    },
];

const WhatWeOffer = () => {
    return (
        <section style={{backgroundColor: "#F3A81C0A"}} className="py-8 md:py-12">
            {/* Header Section */}
            <div className="px-4 sm:px-6 md:px-0">
                <div className="flex items-center gap-4 mt-4 md:mt-12 md:ml-24">
                    <hr className="w-16 border-2 border-red-600" />
                    <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">What We Offer</h2>
                </div>

                <p className="mt-4 px-0 md:ml-24 text-black text-sm sm:text-base">
                    We believe that the best way to create successful marketing campaigns is
                    to <span className="hidden sm:inline"><br/></span> work closely with our clients to understand their goals and challenges.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="mt-8 px-4 sm:px-6 md:px-0 md:ml-24 md:mr-24">
                {/* Mobile Layout - Stack vertically */}
                <div className="block lg:hidden">
                    {/* Customer Image for Mobile */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/happy_customers.svg"
                            alt="Customer"
                            className="w-full max-w-xs sm:max-w-sm"
                        />
                    </div>

                    {/* Benefits List for Mobile */}
                    <div className="flex flex-col gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 sm:gap-4">
                                <div className="flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-black text-base sm:text-lg">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 mt-1">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center gap-4 rounded-lg p-4 min-w-0">
                        <img src="/happy_customers.svg" alt="Customer" className="w-150"/>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {benefit.icon}
                                <div>
                                    <h3 className="font-semibold text-black text-lg">{benefit.title}</h3>
                                    <p className="text-sm text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;

//
//
// const benefits = [
//     {
//         icon: <img src="/innovation.svg" alt="Innovation" className="h-16 w-16"/>,
//         title: "Native and Hybrid App Development",
//         description:
//             "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
//     },
//     {
//         icon: <img src="/integrity.svg" alt="Integrity" className="h-16 w-16"/>,
//         title: "UI/UX design tailored for mobile",
//         description:
//             "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
//     },
//     {
//         icon: <img src="/excellence.svg" alt="Excellence" className="h-16 w-16"/>,
//         title: "Backend integration",
//         description:
//             "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
//     },
//     {
//         icon: <img src="/collaboration.svg" alt="Collaboration" className="h-16 w-16"/>,
//         title: "Testing and quality assurance",
//         description:
//             "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
//     },
//     {
//         icon: <img src="/customer_centricity.svg" alt="Customer-Centricity" className="h-16 w-16"/>,
//         title: "Deployment to app stores",
//         description:
//             "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
//     },
// ];
//
// const WhatWeOffer = () => {
//     return (
//         <section style={{backgroundColor: "#F3A81C0A"}}>
//
//             <div className="flex items-center gap-4 mt-12 md:ml-24 ">
//                 <hr className="w-16 border-2 border-red-600 " />
//                 <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">What We Offer</h2>
//             </div>
//
//             <p className=" md:ml-24 text-black">
//                 We believe that the best way to create successful marketing campaigns is
//                 to <br/> work closely with our clients to understand their goals and challenges.
//             </p>
//
//             <div className="md:ml-24 md:mr-24  flex   items-center">
//                 <div className="flex items-center gap-4 rounded-lg p-4  min-w-0">
//                     <img src="/happy_customers.svg" alt="Customer" className="w-150"/>
//                 </div>
//                 <div className="flex flex-col gap-4 flex-1 min-w-0">
//                     {benefits.map((benefit, index) => (
//                         <div key={index} className="flex items-start gap-3">
//                             {benefit.icon}
//                             <div>
//                                 <h3 className="font-semibold text-black text-lg">{benefit.title}</h3>
//                                 <p className="text-sm text-gray-700">{benefit.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default WhatWeOffer;