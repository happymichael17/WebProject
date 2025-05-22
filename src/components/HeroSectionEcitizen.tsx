
export default function HeroSectionEcitizen() {
        return (

            <section className="relative md:h-full md:w-max-auto px-4 sm:px-8 md:px-12">
                <img
                    src="/ecitizen_details.svg"
                    alt="Services background"
                    className="w-full h-48 sm:h-64 md:h-full rounded-4xl object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-2 sm:pl-4 md:pl-8 w-full h-full">
                    <h3 className="text-white drop-shadow-lg mb-2 text-left px-4 sm:px-8 md:px-16 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl">
                        May 20, 2025
                    </h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-md text-left px-4 sm:px-8 md:px-16">
                        The E-CITIZEN platform stands as <br className="hidden md:block"/>one of the most transformative digi...
                    </h1>
                </div>
            </section>


            // <section className="relative md:h-full md:w-max-auto px-12">
            //     <img
            //         src="/ecitizen_details.svg"
            //         alt="Services background"
            //         className="w-full h-full object-cover"
            //     />
            //     <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 w-full h-full">
            //         <h3 className="  text-white drop-shadow-lg mb-2 text-left px-16 py-4">
            //             May 20, 2025 </h3>
            //       <h1 className="text-4xl text-white drop-shadow-md text-left px-16">
            //             The E-CITIZEN platform stands as <br/>one of the most  transformative digi...
            //         </h1>
            //
            //     </div>
            // </section>

        );
    }

