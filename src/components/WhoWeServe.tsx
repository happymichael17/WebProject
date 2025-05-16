
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
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl text-black font-bold mb-8">Who We Serve</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                       <img src={service.icon} alt={service.title} className={`${service.color} text-4xl mb-4`} />
                        <p className="text-lg text-black font-semibold">{service.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
