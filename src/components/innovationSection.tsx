const InnovationSection = () => (
    <section className="flex flex-col my-6 w-full  ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl sm:px-6 md:px-8 font-bold text-center mx-auto mb-4 text-black leading-tight">
            Experience Genuine <br className="sm:block" /> Innovation
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-700 text-center mx-auto mb-8 md:mb-16 py-2 px-4 max-w-4xl">
            Our leadership team at Webmasters Kenya Ltd is united by a shared commitment to
            excellence, innovation, and customer-centric solutions. Together, they drive the company forward,
            ensuring that we remain a leader in delivering technology solutions that make a meaningful impact.
        </p>

        <hr className="w-4/5 md:w-3/5 rounded-2xl mx-auto border-yellow-400 mb-6"/>

        <div className="flex w-full ">
            <img
                src="/image_group.svg"
                alt="Innovation"
                className="w-full h-full object-cover"
            />
        </div>
    </section>
);

export default InnovationSection;