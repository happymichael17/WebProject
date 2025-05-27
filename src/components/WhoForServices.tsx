export default function WhoForServices() {
    const services = [
        { icon: '/governments.svg', title: 'Public Engagement', color: 'text-purple-500' },
        { icon: '/banks.svg', title: 'Faculties', color: 'text-green-500' },
        { icon: '/supply-chain.svg', title: 'Research units', color: 'text-teal-500' },
        { icon: '/ecommerce.svg', title: 'Ecommerce', color: 'text-orange-500' },
        { icon: '/education.svg', title: 'Education', color: 'text-indigo-500' },
        { icon: '/logistics.svg', title: 'Logistics', color: 'text-red-500' }
    ];

    return (
        <section className="container px-4 sm:p-6 lg:p-12 mx-auto w-full mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl text-center text-black font-bold mb-6 sm:mb-8">Who It's For</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6 justify-center mx-2 sm:mx-0">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 flex flex-col items-center w-full"
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="mb-2 sm:mb-3 h-10 w-10 sm:h-12 sm:w-12"
                        />
                        <p className="text-sm sm:text-base md:text-lg text-black font-semibold text-center truncate w-full">
                            {service.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}