
export default function HeroSectionEcitizen() {
        return (
            <section className="relative md:h-full md:w-max-auto px-12">
                <img
                    src="/ecitizen_details.svg"
                    alt="Services background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 w-full h-full">
                    <h3 className="  text-white drop-shadow-lg mb-2 text-left px-16 py-4">
                        May 20, 2025 </h3>
                  <h1 className="text-4xl text-white drop-shadow-md text-left px-16">
                        The E-CITIZEN platform stands as <br/>one of the most  transformative digi...
                    </h1>

                </div>
            </section>

        );
    }

