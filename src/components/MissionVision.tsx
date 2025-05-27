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
        <div style={{backgroundColor: "#F3A81C0A"}}>
            <section className="container mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                {/* Image container with grid layout */}
                <div className=" flex flex-col md:flex-row w-full md:grid-cols-2 gap-4">
                    <div className="w-full">
                        <img
                            src="/our_mission.svg"
                            alt="Mission Image"
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


                <div className="flex items-center gap-4 mt-8 md:mt-12">
                    <hr className="w-12 md:w-16 border-2 border-red-600" />
                    <h2 className="text-lg md:text-xl font-semibold uppercase text-red-600 mb-0">Our Benefits</h2>
                </div>

                <p className="mt-2 text-sm md:text-base text-black">
                    We believe that the best way to create successful marketing campaigns is
                    to <br className="hidden md:block"/> work closely with our clients to understand their goals and challenges.
                </p>

                <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center md:items-center">
                    <div className="flex items-center justify-center md:justify-center gap-4 rounded-lg p-4 flex-1">
                        <img src="/happy_customers.svg" alt="Customer" className="w-full max-w-auto md:max-w-auto h-auto"/>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-[50%]">
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