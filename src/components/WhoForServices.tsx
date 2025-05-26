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
        <section className="container sm:p-6 lg:p-12 mx-auto w-full ">
            <h2 className="text-2xl md:text-3xl text-center text-black font-bold mb-8">Who It's For</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center w-full"
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="mb-3 h-12 w-12"
                        />
                        <p className="text-base md:text-lg text-black font-semibold text-center truncate w-full">
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
