
const benefits = [
    {
        icon: <img src="/innovation.svg" alt="Innovation" className="h-12 w-12 md:h-16 md:w-16"/>,
        title: "Innovation",
        description:
            "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
    },
    {
        icon: <img src="/integrity.svg" alt="Integrity" className="h-12 w-12 md:h-16 md:w-16"/>,
        title: "Integrity",
        description:
            "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
    },
    {
        icon: <img src="/excellence.svg" alt="Excellence" className="h-12 w-12 md:h-16 md:w-16"/>,
        title: "Excellence",
        description:
            "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
    },
    {
        icon: <img src="/collaboration.svg" alt="Collaboration" className="h-12 w-12 md:h-16 md:w-16"/>,
        title: "Collaboration",
        description:
            "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
    },
    {
        icon: <img src="/customer_centricity.svg" alt="Customer-Centricity" className="h-12 w-12 md:h-16 md:w-16"/>,
        title: "Customer-Centricity",
        description:
            "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
    },
];

const MissionAndBenefitsSection = () => {
    return (

        <div  style={{backgroundColor: "#F3A81C0A"}}>
            <section className="  container sm:p-6 lg:p-12 mx-auto w-full " >
                <div className="  w-full flex flex-col md:flex-row gap-2">
                    <div className=" w-full">
                        <img
                            src="/our_mission.svg"
                            alt="Vision Image"
                            className="w-full h-auto object-cover rounded-lg md:rounded-4xl"
                        />
                    </div>
                    <div className="w-full">
                        <img
                            src="/visionpro.svg"
                            alt="Vision Image"
                            className="w-full h-auto object-cover rounded-lg md:rounded-4xl"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-8 md:mt-12 mx-4 ">
                    <hr className="w-12 md:w-16 border-2 border-red-600" />
                    <h2 className="text-lg md:text-xl font-semibold uppercase text-red-600 mb-0">Our Benefits</h2>
                </div>

                <p className="mt-2 mx-4 text-sm md:text-base text-black">
                    We believe that the best way to create successful marketing campaigns is
                    to <br className="hidden md:block"/> work closely with our clients to understand their goals and challenges.
                </p>

                <div className=" mt-6 flex flex-col md:flex-row gap-6 justify-center md:items-center">
                    <div className="flex items-center justify-center md:justify-center gap-4 rounded-lg p-4 flex-1">
                        <img src="/happy_customers.svg" alt="Customer" className="w-full  max-w-auto md:max-w-auto h-auto"/>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-[50%] ">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                {benefit.icon}
                                <div>
                                    <h3 className="font-semibold text-black text-base md:text-lg">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MissionAndBenefitsSection;


// const benefits = [
//     {
//         icon: <img src="/innovation.svg" alt="Innovation" className="h-16 w-16"/>,
//         title: "Innovation",
//         description:
//             "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
//     },
//     {
//         icon: <img src="/integrity.svg" alt="Integrity" className="h-16 w-16"/>,
//         title: "Integrity",
//         description:
//             "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
//     },
//     {
//         icon: <img src="/excellence.svg" alt="Excellence" className="h-16 w-16"/>,
//         title: "Excellence",
//         description:
//             "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
//     },
//     {
//         icon: <img src="/collaboration.svg" alt="Collaboration" className="h-16 w-16"/>,
//         title: "Collaboration",
//         description:
//             "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
//     },
//     {
//         icon: <img src="/customer_centricity.svg" alt="Customer-Centricity" className="h-16 w-16"/>,
//         title: "Customer-Centricity",
//         description:
//             "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
//     },
// ];
//
// const MissionAndBenefitsSection = () => {
//     return (
//         <section style={{backgroundColor: "#F3A81C0A"}}>
//             <div className="grid w-[1400px] mx-auto md:grid-cols-2 ">
//                 <div>
//                     <img
//                         src="/our_mission.svg"
//                         alt="Vision Image"
//                         className="w-full h-full rounded-4xl"
//                     />
//                 </div>
//                 <div>
//                     <img
//                         src="/visionpro.svg"
//                         alt="Vision Image"
//                         className="w-full h-full rounded-4xl"
//
//                     />
//                 </div>
//             </div>
//
//             <div className="flex items-center gap-4 mt-12 md:ml-24">
//                 <hr className="w-16 border-2 border-red-600 " />
//                 <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">Our Benefits</h2>
//             </div>
//
//             <p className="mt-2 md:ml-24 text-black">
//                 We believe that the best way to create successful marketing campaigns is
//                 to <br/> work closely with our clients to understand their goals and challenges.</p>
//
//             <div className="md:ml-24 md:mr-24 mt-6 flex flex-wrap gap-6 items-center">
//                 <div className="flex items-center gap-4 rounded-lg p-4 flex-1 min-w-0">
//                     <img src="/happy_customers.svg" alt="Customer" className="w-150 h-150"/>
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
// export default MissionAndBenefitsSection;