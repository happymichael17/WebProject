// import {  Award, ShieldCheck, Star, Users, Heart } from "lucide-react";
//
// const benefits = [
//     {
//         icon: <Award className="h-6 w-6 text-red-600" />,
//         title: "Innovation",
//         description:
//             "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
//     },
//     {
//         icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
//         title: "Integrity",
//         description:
//             "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
//     },
//     {
//         icon: <Star className="h-6 w-6 text-red-600" />,
//         title: "Excellence",
//         description:
//             "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
//     },
//     {
//         icon: <Users className="h-6 w-6 text-red-600" />,
//         title: "Collaboration",
//         description:
//             "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
//     },
//     {
//         icon: <Heart className="h-6 w-6 text-red-600" />,
//         title: "Customer-Centricity",
//         description:
//             "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
//     },
// ];
//
// const MissionAndBenefitsSection = () => {
//     return (
// <section className="p-6" style={{ backgroundColor: "#F3A81C0A" }} >
//     <div className="grid  md:grid-cols-2 gap-8 items-stretch">
//     <div className="bg-red-600 text-white p-6 rounded-4xl flex flex-col h-full">
//         <h2 className="text-2xl font-bold">Our Mission</h2>
//         <p className="mt-4">
//             Mission: Empowering webmasters to create innovative experiences.
//         </p>
//         <p className="mt-2 text-white/90">
//             Our leadership team is united by a shared commitment to excellence, innovation, and customer-centric solutions.
//         </p>
//     </div>
//     <div className="rounded-4xl overflow-hidden flex flex-col h-full">
//         <img
//             src="/visionpro.svg"
//             alt="Vision Image"
//             className="w-full h-full object-cover"
//             style={{ minHeight: "100%", height: "100%" }}
//         />
//     </div>
// </div>
//             <h2 className="mt-12 text-2xl text-black font-bold">Our Benefits</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                 {benefits.map((benefit, index) => (
//                     <div key={index} className="p-4 flex items-start bg-white rounded-lg shadow-md">
//                         {benefit.icon}
//                         <div className="ml-4">
//                             <h3 className="font-semibold text-lg">{benefit.title}</h3>
//                             <p className="text-sm text-gray-700">{benefit.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };
//
// export default MissionAndBenefitsSection;

const benefits = [
    {
        icon: <img src="/innovation.svg" alt="Innovation" className="h-16 w-16"/>,
        title: "Innovation",
        description:
            "We believe in pushing the boundaries of technology to provide our clients with forward-thinking, creative solutions that meet their evolving needs.",
    },
    {
        icon: <img src="/integrity.svg" alt="Integrity" className="h-16 w-16"/>,
        title: "Integrity",
        description:
            "Integrity is at the core of everything we do. We prioritize honesty, transparency, and ethical business practices, ensuring that our clients can trust us.",
    },
    {
        icon: <img src="/excellence.svg" alt="Excellence" className="h-16 w-16"/>,
        title: "Excellence",
        description:
            "We are dedicated to delivering nothing short of excellence in every aspect of our work, from service to results.",
    },
    {
        icon: <img src="/collaboration.svg" alt="Collaboration" className="h-16 w-16"/>,
        title: "Collaboration",
        description:
            "Teamwork and collaboration are essential to our approach. We work closely with our clients to achieve great outcomes.",
    },
    {
        icon: <img src="/customer_centricity.svg" alt="Customer-Centricity" className="h-16 w-16"/>,
        title: "Customer-Centricity",
        description:
            "Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to their unique requirements.",
    },
];

const MissionAndBenefitsSection = () => {
    return (
        <section style={{backgroundColor: "#F3A81C0A"}}>
            <div className="grid w-[1400px] mx-auto justify-center items-center md:grid-cols-2 gap-2">
                <div>
                    <img
                        src="/our_mission.svg"
                        alt="Vision Image"
                        className="w-full h-full rounded-4xl"
                    />
                </div>
                <div>
                    <img
                        src="/visionpro.svg"
                        alt="Vision Image"
                        className="w-full h-full rounded-4xl"

                    />
                </div>
            </div>

            <div className="flex items-center gap-4 mt-12">
                <hr className="w-16 border-2 border-red-600 " />
                <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">Our Benefits</h2>
            </div>

            <p className="mt-2 text-black">We believe that the best way to create successful marketing campaigns is
                to <br/> work closely with our clients to understand their goals and challenges.</p>

            <div className="mt-6 flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-4 rounded-lg p-4 flex-1 min-w-0">
                    <img src="/happy_customers.svg" alt="Customer" className="w-150 h-150"/>
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
        </section>
    );
};

export default MissionAndBenefitsSection;