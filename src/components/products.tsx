import { useState } from 'react';

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('popular');

    const tabs = [
        { id: 'all', label: 'All Services' },
        { id: 'popular', label: 'Popular Services' },
        { id: 'new', label: 'New Services' },
    ];

    const services = [
        {
            title: 'Custom Software Development',
            image: '/image1.svg',
            alt: 'Team collaborating with sticky notes'
        },
        {
            title: 'Cybersecurity Services',
            image: '/api/placeholder/350/200',
            alt: 'Man presenting at whiteboard'
        },
        {
            title: 'Mobile App Development',
            image: '/api/placeholder/350/200',
            alt: 'Woman smiling near presentation board'
        },
        {
            title: 'Digital Transformation Consulting',
            image: '/api/placeholder/350/200',
            alt: 'Team working on laptop'
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Browse By services</h2>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="border-b border-gray-200 flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`pb-4 px-1 text-lg font-medium ${
                                activeTab === tab.id
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
                        <div className="mb-4 overflow-hidden rounded-2xl">
                            <img
                                src={service.image}
                                alt={service.alt}
                                className="w-full h-40 object-cover"
                            />
                        </div>
                        <div className="mt-auto flex justify-between items-center">
                            <h3 className="text-lg font-medium">{service.title}</h3>
                            <button className={`rounded-full p-2 ${index === 0 ? 'bg-red-500 text-white' : 'border border-gray-300'}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}