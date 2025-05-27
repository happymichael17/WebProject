import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CaseStudiesSection() {
    return (
        <section className="container sm:p-6 lg:p-12 mx-auto w-full">
            <div className="px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl text-black font-bold mb-2 md:mb-4">
                    Paramount Results, Real-World Efficiency
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-12">
                    We provide tailored technology solutions to meet the unique needs of businesses in Kenya and beyond.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
                <div className="bg-white rounded-4xl shadow-md p-4 md:p-6 relative flex flex-col">
                    <img src="/ecitizen_image.svg" alt="Case Study 1" className="rounded-lg w-full h-auto md:h-auto object-cover" />
                    <div className="mt-4 flex-1 flex flex-col">
                        <p className="text-xs md:text-sm text-gray-500">2014</p>
                        <h3 className="text-lg md:text-xl text-black font-bold">
                            Government Solutions: eCitizen Kenya
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm md:text-base flex-1">
                            The eCitizen Kenya platform stands as one of the most transformative digital solutions for the Government of Kenya.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                            </div>
                            <span className="ml-2 text-sm md:text-base">Learn More</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-4xl shadow-md p-4 md:p-6 relative flex flex-col">
                    <img src="/milescoop.svg" alt="Case Study 2" className="rounded-lg w-full h-auto md:h-auto object-cover" />
                    <div className="mt-4 flex-1 flex flex-col">
                        <p className="text-xs md:text-sm text-gray-500">2020</p>
                        <h3 className="text-lg md:text-xl text-black font-bold">
                            Real Estate: Milescoop Ventures Ltd
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm md:text-base flex-1">
                            Milescoop Ventures Ltd is a leading real estate company that specializes in buying, subdividing, and selling land to clients both in Kenya and abroad.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                            </div>
                            <span className="ml-2 text-sm md:text-base">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}