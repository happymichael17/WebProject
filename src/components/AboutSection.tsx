
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
        <section className="py-10 px-46 max-w mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-red-50">
            <div className="relative">
                <img src="/projectscompleted.svg" alt="Professional working" className="rounded-2xl w-full h-auto object-cover" />
                <div className="absolute top-14 left-5 md:p-16">
                    <img src="/review_image_about.svg" alt="Star" className="w-full h-full" />
                </div>

                <div className="absolute top-34 right-54 text-white space-y-4">
                    <p className="text-2xl md:text-4xl font-bold">{awards}+</p>
                    <p className="text-base md:text-lg">Worldwide <br /> Awards</p>
                </div>

                <div className="absolute bottom-16 left-26 text-white space-y-4">
                    <p className="text-4xl md:text-4xl font-bold">{guides}+</p>
                    <p className="text-base md:text-lg">Professional <br /> Guides</p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Getting started is easy, connect with top African tech talent efficiently.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
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