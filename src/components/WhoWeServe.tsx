export default function WhoWeServeSection() {
    const services = [
        { icon: '/governments.svg', title: 'Government', color: 'text-purple-500' },
        { icon: '/banks.svg', title: 'Banking', color: 'text-green-500' },
        { icon: '/supply-chain.svg', title: 'Supply-Chain', color: 'text-teal-500' },
        { icon: '/ecommerce.svg', title: 'Ecommerce', color: 'text-orange-500' },
        { icon: '/education.svg', title: 'Education', color: 'text-indigo-500' },
        { icon: '/logistics.svg', title: 'Logistics', color: 'text-red-500' }
    ];

    return (
        <section className="py-8 sm:py-10 md:py-12 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl text-center text-black font-bold mb-6 sm:mb-8 md:mb-10">
                    Who We Serve
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 flex flex-col items-center w-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="mb-2 sm:mb-3 md:mb-4 p-2 flex items-center justify-center">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center flex-grow">
                                <p className="text-sm sm:text-base md:text-lg text-black font-semibold text-center">
                                    {service.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
