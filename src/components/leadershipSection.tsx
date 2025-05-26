


const leaders = [
    {
        name: "James Ayugi",
        position: "Founder & CEO",
        image: "/james.svg",
        linkedin: "#",
    },
    {
        name: "Alex Mwangi",
        position: "Chief Technology Officer",
        image: "/leader2.svg",
        linkedin: "#",
    },
    {
        name: "David Kamau",
        position: "Chief Financial Officer",
        image: "/leader3.svg",
        linkedin: "#",
    },
    {
        name: "Sophia Otieno",
        position: "Chief Operations Officer",
        image: "/leader4.svg",
        linkedin: "#",
    },
];

const LeadershipSection = () => {
    return (
        <section className=" sm:p-6 lg:p-12 container mx-auto ">
            <div className="flex items-center gap-4 mt-8 md:mt-12 mx-4">
                <hr className="w-12 md:w-16 border-2 border-red-600" />
                <h2 className="text-lg md:text-xl font-semibold uppercase text-red-600 mb-0">Our Leadership</h2>
            </div>
            <p className="mt-2 mx-4 text-sm md:text-base text-black">
                        Meet the team crafting secure, fast, and engaging digital experiences.</p>

            <div className=" w-full flex flex-col md:flex-row gap-6 sm:gap-4 mt-4 sm:mt-6 justify-between">
                            {leaders.map((leader, index) => (
                                <div key={index}
                                     className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden rounded-2xl mb-4 sm:mb-0">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 w-full text-white p-3 sm:p-4 flex justify-between items-center backdrop-blur-sm bg-[#333333]">
                                        <div>
                                            <h3 className="font-semibold text-sm sm:text-base">{leader.name}</h3>
                                            <p className="text-xs sm:text-sm">{leader.position}</p>
                                        </div>
                                        <a
                                            href={leader.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:opacity-80 transition-opacity"
                                        >
                                            <img src="/linkedin.svg" alt="LinkedIn" className="h-4 w-4 sm:h-5 sm:w-5"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

            {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 mt-4 sm:mt-6 justify-items-center mx-4 md:mx-24">*/}
            {/*            {leaders.map((leader, index) => (*/}
            {/*                <div key={index}*/}
            {/*                     className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden rounded-2xl  ">*/}
            {/*                    <img*/}
            {/*                        src={leader.image}*/}
            {/*                        alt={leader.name}*/}
            {/*                        className="w-full h-full object-cover"*/}
            {/*                    />*/}
            {/*                    <div className="absolute bottom-0 w-full text-white p-3 sm:p-4 flex justify-between items-center backdrop-blur-sm bg-[#333333]">*/}
            {/*                        <div>*/}
            {/*                            <h3 className="font-semibold text-sm sm:text-base">{leader.name}</h3>*/}
            {/*                            <p className="text-xs sm:text-sm">{leader.position}</p>*/}
            {/*                        </div>*/}
            {/*                        <a*/}
            {/*                            href={leader.linkedin}*/}
            {/*                            target="_blank"*/}
            {/*                            rel="noopener noreferrer"*/}
            {/*                            className="hover:opacity-80 transition-opacity"*/}
            {/*                        >*/}
            {/*                            <img src="/linkedin.svg" alt="LinkedIn" className="h-4 w-4 sm:h-5 sm:w-5"/>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
                </section>

        // <section className="p-6 md:p-12 md:mr-24 md:ml-24">
        //     <div className="flex items-center gap-4 mt-12">
        //         <hr className="w-16 border-2 border-red-600 "/>
        //         <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">Our Leadership</h2>
        //     </div>
        //     <p className="mt-2 text-black ">Meet the team crafting secure, fast, and engaging digital experiences.</p>
        //
        //     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        //         {leaders.map((leader, index) => (
        //             <div key={index} className="relative w-[280px] h-[350px] overflow-hidden rounded-2xl shadow-md" style={{backgroundColor: "#333333"}}>
        //                 <img src={leader.image} alt={leader.name} className=" object-cover"/>
        //                 <div
        //                     className="absolute bottom-0 w-full  text-white p-4 flex justify-between items-center">
        //                     <div>
        //                         <h3 className="font-semibold">{leader.name}</h3>
        //                         <p className="text-sm">{leader.position}</p>
        //                     </div>
        //                     <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
        //                         <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5"/> </a>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </section>
    );
};

export default LeadershipSection;