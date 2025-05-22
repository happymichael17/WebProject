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
        <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
                Who It&apos;s For
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center w-36 sm:w-44 md:w-48 lg:w-42 flex-none transition-all"
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="mb-6 w-14 h-14 object-contain"
                        />
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-black text-center leading-snug">
                            {service.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}



//
//
// export default function WhoForServices() {
//     const services = [
//         { icon: '/governments.svg', title: 'Public Engagement', color: 'text-purple-500' },
//         { icon: '/banks.svg', title: 'Faculties', color: 'text-green-500' },
//         { icon: '/supply-chain.svg', title: 'Research units', color: 'text-teal-500' },
//         { icon: '/ecommerce.svg', title: 'Ecommerce', color: 'text-orange-500' },
//         { icon: '/education.svg', title: 'Education', color: 'text-indigo-500' },
//         { icon: '/logistics.svg', title: 'Logistics', color: 'text-red-500' }
//     ];
//
//     return (
//         <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center">
//             <h2 className="text-2xl sm:text-3xl text-black font-bold mb-8">Who It&apos;s For</h2>
//             <div className="flex flex-wrap gap-4 justify-center">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-40 sm:w-44 md:w-48 lg:w-42 flex-none"
//                     >
//                         <img
//                             src={service.icon}
//                             alt={service.title}
//                             className={`mb-4 w-12 h-12 object-contain`}
//                         />
//                         <p className="text-base px-2 sm:text-lg sm:px-4 md:px-8 sm:py-8 text-black font-semibold text-center truncate w-full">
//                             {service.title}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// export default function WhoForServices() {
//     const services = [
//         { icon: '/governments.svg', title: 'Public Engagement', color: 'text-purple-500' },
//         { icon: '/banks.svg', title: 'Faculties', color: 'text-green-500' },
//         { icon: '/supply-chain.svg', title: 'Research units', color: 'text-teal-500' },
//         { icon: '/ecommerce.svg', title: 'Ecommerce', color: 'text-orange-500' },
//         { icon: '/education.svg', title: 'Education', color: 'text-indigo-500' },
//         { icon: '/logistics.svg', title: 'Logistics', color: 'text-red-500' }
//     ];
//
//     return (
//         <section className="py-16 px-[24px] max-w-7xl mx-auto text-center">
//             <h2 className="text-3xl text-black font-bold mb-8">Who It's For</h2>
//             <div className=" flex gap-2 justify-center">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-50 flex-none"
//                     >
//                         <img
//                             src={service.icon}
//                             alt={service.title}
//                             className={`${service.color} text-4xl mb-4`}
//                         />
//                         <p className="text-lg text-black font-semibold text-center truncate w-full">
//                             {service.title}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
