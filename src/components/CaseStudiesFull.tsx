import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function CaseStudiesFull() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl text-black font-bold  mb-4">Paramount Results, Real-World Efficiency</h2>
            <p className="text-lg  text-gray-600 mb-12">
                We provide tailored technology solutions to meet the unique
                needs of businesses in Kenya and beyond.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* eCitizen Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/ecitizen_image.svg" alt="Case Study 1" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2014</p>
                        <h3 className="text-xl text-black font-bold mb-2">Government Solutions: eCitizen Kenya</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            The eCitizen Kenya platform stands as one of the most
                            transformative digital solutions for the Government of Kenya.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4"
                                onClick={() => window.location.href = '/case-study/ecitizen-details'}
                        >
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Milescoop Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/milescoop.svg" alt="Case Study 2" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2020</p>
                        <h3 className="text-xl text-black font-bold mb-2">Real Estate: Milescoop Ventures Ltd</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Milescoop Ventures Ltd is a leading real estate company that
                            specializes in buying, subdividing, and selling land to clients both in Kenya and
                            abroad.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Fintech Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/case_study3.svg" alt="Case Study 3" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2022</p>
                        <h3 className="text-xl text-black font-bold mb-2">Fintech: Example Fintech Project</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Example Fintech Project is revolutionizing digital payments and financial inclusion across
                            Africa.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

            ```typescriptreact
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* eCitizen Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/ecitizen_image.svg" alt="Case Study 1" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2014</p>
                        <h3 className="text-xl text-black font-bold mb-2">Government Solutions: eCitizen Kenya</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            The eCitizen Kenya platform stands as one of the most
                            transformative digital solutions for the Government of Kenya.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Milescoop Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/milescoop.svg" alt="Case Study 2" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2020</p>
                        <h3 className="text-xl text-black font-bold mb-2">Real Estate: Milescoop Ventures Ltd</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Milescoop Ventures Ltd is a leading real estate company that
                            specializes in buying, subdividing, and selling land to clients both in Kenya and
                            abroad.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Fintech Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/case_study3.svg" alt="Case Study 3" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2022</p>
                        <h3 className="text-xl text-black font-bold mb-2">Fintech: Example Fintech Project</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Example Fintech Project is revolutionizing digital payments and financial inclusion across
                            Africa.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Remove duplicate and inconsistent card grids below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* eCitizen Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/ecitizen_image.svg" alt="Case Study 1" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2014</p>
                        <h3 className="text-xl text-black font-bold mb-2">Government Solutions: eCitizen Kenya</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            The eCitizen Kenya platform stands as one of the most
                            transformative digital solutions for the Government of Kenya.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Milescoop Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/milescoop.svg" alt="Case Study 2" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2020</p>
                        <h3 className="text-xl text-black font-bold mb-2">Real Estate: Milescoop Ventures Ltd</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Milescoop Ventures Ltd is a leading real estate company that
                            specializes in buying, subdividing, and selling land to clients both in Kenya and
                            abroad.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
                {/* Fintech Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col h-full">
                    <img src="/case_study3.svg" alt="Case Study 3" className="rounded-lg w-full"/>
                    <div className="mt-4 flex flex-col flex-1">
                        <p className="text-sm text-gray-500 mb-1">2022</p>
                        <h3 className="text-xl text-black font-bold mb-2">Fintech: Example Fintech Project</h3>
                        <p className="text-gray-400 mt-2 flex-1">
                            Example Fintech Project is revolutionizing digital payments and financial inclusion across
                            Africa.
                        </p>
                        <button className="flex items-center text-red-500 font-bold mt-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-white"/>
                            </div>
                            <span className="ml-2">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}