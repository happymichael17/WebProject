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
            description: "Struggling to find experts to bridge a skills gap within your existing staff? Don't worry. Our experts can seamlessly integrate into your team.",
        },
    ];

    return (
        <div className="w-full" style={{ backgroundColor: "#F3A81C0A" }}>
            <section className="container mx-auto w-full p-4 sm:p-6 lg:p-12">
                {/* Responsive flex container that changes to column on small screens */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    {/* Image section */}
                    <div className="relative w-full lg:w-1/2 rounded-4xl">
                        <img 
                            src="/projectscompleted.svg" 
                            alt="Professional working" 
                            className="rounded-4xl object-cover w-full h-full" 
                        />
                        <div className="absolute top-4 left-4 sm:top-8 sm:left-6 md:top-14 md:p-8">
                            <img 
                                src="/review_image_about.svg" 
                                alt="Star" 
                                className="w-auto h-auto md:w-auto md:h-auto" 
                            />
                        </div>
                        <div className="absolute top-16 right-4 sm:top-20 sm:right-6 md:top-34 text-white">
                            <p className="text-xl md:text-4xl font-bold">{awards}+</p>
                            <p className="text-sm md:text-lg">Worldwide <br /> Awards</p>
                        </div>
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-6 md:bottom-16 md:left-24 text-white">
                            <p className="text-2xl md:text-4xl font-bold">{guides}+</p>
                            <p className="text-sm md:text-lg">Professional <br /> Guides</p>
                        </div>
                    </div>

                    {/* Features section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4">
                        <h2 className="text-xl md:text-3xl font-bold text-black mb-6">
                            Getting started is easy, connect with top African tech talent efficiently.
                        </h2>
                        <div className="w-full space-y-4 md:space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg text-black font-bold">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}