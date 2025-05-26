

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('popular');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { id: 'all', label: 'All Services' },
        { id: 'popular', label: 'Popular Services' },
        { id: 'new', label: 'New Services' },
    ];

    const services = [
        {
            title: 'Custom Software Development',
            image: '/image1.svg',
        },
        {
            title: 'Cybersecurity Services',
            image: '/image2.svg',
        },
        {
            title: 'Mobile App Development',
            image: '/image3.svg',
        },
        {
            title: 'Digital Transformation',
            image: '/image4.svg',
        },
        {
            title: 'Digital Transformation',
            image: '/image4.svg',
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className=" container sm:p-6 lg:p-12 mx-auto w-full ">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-black fa-font-awesome mb-6 sm:mb-8">
                Browse By Services
            </h2>

            <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
                <div className="border-b border-gray-200 flex space-x-6 sm:space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`pb-4 px-1 text-base sm:text-lg font-bold whitespace-nowrap ${
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

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hidden sm:block"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-4xl shadow-sm p-3 sm:p-4 flex-none w-[280px] sm:w-[320px] snap-start"
                        >
                            <div className="mb-4 overflow-hidden rounded-4xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{ objectPosition: 'top' }}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-base sm:text-lg font-bold text-black font-awesome pr-4">
                                    {service.title}
                                </h3>
                                <button
                                    className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white hidden sm:block"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}

// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//
// export default function ServicesSection() {
//     const [activeTab, setActiveTab] = useState('popular');
//
//     const tabs = [
//         { id: 'all', label: 'All Services' },
//         { id: 'popular', label: 'Popular Services' },
//         { id: 'new', label: 'New Services' },
//     ];
//
//     const services = [
//         {
//             title: 'Custom Software Development',
//             image: '/image1.svg',
//         },
//         {
//             title: 'Cybersecurity Services',
//             image: '/image2.svg',
//         },
//         {
//             title: 'Mobile App Development',
//             image: '/image3.svg',
//         },
//         {
//             title: 'Digital Transformation Consulting',
//             image: '/image4.svg',
//         }
//     ];
//
//     return (
//         <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold text-center text-black fa-font-awesome mb-8">Browse By Services</h2>
//
//             <div className="flex justify-center mb-12">
//                 <div className="border-b border-gray-200 flex space-x-8">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab.id}
//                             className={`pb-4 px-1 text-lg font-bold ${activeTab === tab.id ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
//                             onClick={() => setActiveTab(tab.id)}
//                         >
//                             {tab.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {services.map((service, index) => (
//                     <div key={index} className="bg-white rounded-xl shadow-sm p-3 sm:p-4 flex flex-col">
//                         <div className="mb-4 overflow-hidden rounded-2xl p-0">
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className="w-full aspect-[5/4] object-cover rounded-4xl"
//                                 style={{ objectPosition: 'top' }}
//                             />
//
//                         </div>
//                         <div className="mt-auto flex justify-between items-center">
//                             <h3 className="text-lg font-bold text-black font-awesome">{service.title}</h3>
//                             <button
//                                 className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
//                             >
//                                 <FontAwesomeIcon icon={faArrowRight} />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//
// export default function ServicesSection() {
//     const [activeTab, setActiveTab] = useState('popular');
//
//     const tabs = [
//         { id: 'all', label: 'All Services' },
//         { id: 'popular', label: 'Popular Services' },
//         { id: 'new', label: 'New Services' },
//     ];
//
//     const services = [
//         {
//             title: 'Custom Software Development',
//             image: '/image1.svg',
//         },
//         {
//             title: 'Cybersecurity Services',
//             image: '/image2.svg',
//         },
//         {
//             title: 'Mobile App Development',
//             image: '/image3.svg',
//         },
//         {
//             title: 'Digital Transformation Consulting',
//             image: '/image4.svg',
//         }
//     ];
//
//     return (
//         <section className="py-4 px-8 max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold text-center text-black fa-font-awesome mb-8">Browse By Services</h2>
//
//             <div className="flex justify-center mb-12">
//                 <div className="border-b border-gray-200 flex space-x-8">
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab.id}
//                             className={`pb-4 px-1 text-lg font-bold ${activeTab === tab.id ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
//                             onClick={() => setActiveTab(tab.id)}
//                         >
//                             {tab.label}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {services.map((service, index) => (
//                     <div key={index} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col">
//                         <div className="mb-4 overflow-hidden rounded-2xl p-0">
//                             <img
//                                 src={service.image}
//                                 className="w-full h-40 object-cover rounded-2xl m-0 p-0"
//                                 style={{ objectPosition: "top" }}
//                             />
//                         </div>
//                         <div className="mt-auto flex justify-between items-center">
//                             <h3 className="text-lg font-bold text-black font-awesome">{service.title}</h3>
//                             <button
//                                 className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
//                             >
//                                 <FontAwesomeIcon icon={faArrowRight} />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
