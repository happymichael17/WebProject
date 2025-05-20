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
        <section className="p-6 md:p-12 md:mr-24 md:ml-24">
            <div className="flex items-center gap-4 mt-12">
                <hr className="w-16 border-2 border-red-600 "/>
                <h2 className="text-xl font-semibold uppercase text-red-600 mb-0">Our Leadership</h2>
            </div>
            <p className="mt-2 text-black ">Meet the team crafting secure, fast, and engaging digital experiences.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                {leaders.map((leader, index) => (
                    <div key={index} className="relative w-[280px] h-[350px] overflow-hidden rounded-2xl shadow-md" style={{backgroundColor: "#333333"}}>
                        <img src={leader.image} alt={leader.name} className=" object-cover"/>
                        <div
                            className="absolute bottom-0 w-full  text-white p-4 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{leader.name}</h3>
                                <p className="text-sm">{leader.position}</p>
                            </div>
                            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5"/> </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LeadershipSection;