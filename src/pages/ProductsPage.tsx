import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import BackToTop from "../components/BackToTop.tsx";

export default function ProductsPage() {

    const [activeTab, setActiveTab] = useState('popular');

    const tabs = [
        {id: 'all', label: 'All Services'},
        {id: 'popular', label: 'Popular Services'},
        {id: 'new', label: 'New Services'},
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
        }
    ];

    return (
        <div className="min-h-screen bg-white w-full max-w-full flex flex-col">
            <Navbar/>
            <section className="container bg-white px-4 sm:px-6 lg:px-12 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-12 mx-auto w-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-black fa-font-awesome my-6 sm:mb-8">Browse By Services</h2>
                <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="border-b border-gray-200 flex space-x-2 sm:space-x-4 overflow-x-auto pb-1 sm:pb-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`pb-2 sm:pb-4 px-1 sm:px-2 text-sm sm:text-base md:text-lg font-bold whitespace-nowrap ${activeTab === tab.id ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* First service grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-sm p-2 sm:p-3 md:p-6 flex flex-col">
                            <div className="mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-3xl w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-black font-awesome pr-1 sm:pr-2">{service.title}</h3>
                                <button
                                    className="rounded-full p-1 sm:p-1.5 md:p-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center border bg-white text-black hover:bg-red-500 hover:text-white"
                                    aria-label={`View ${service.title}`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Second service grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-sm p-2 sm:p-3 md:p-6 flex flex-col">
                            <div className="mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-3xl w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-black font-awesome pr-1 sm:pr-2">{service.title}</h3>
                                <button
                                    className="rounded-full p-1 sm:p-1.5 md:p-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center border bg-white text-black hover:bg-red-500 hover:text-white"
                                    aria-label={`View ${service.title}`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Third service grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4 mb-8 sm:mb-10 md:mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-sm p-2 sm:p-3 md:p-6 flex flex-col">
                            <div className="mb-2 sm:mb-3 md:mb-4 overflow-hidden rounded-3xl w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-black font-awesome pr-1 sm:pr-2">{service.title}</h3>
                                <button
                                    className="rounded-full p-1 sm:p-1.5 md:p-2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center border bg-white text-black hover:bg-red-500 hover:text-white"
                                    aria-label={`View ${service.title}`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BackToTop/>
            <div className="mt-auto">
                <Footer/>
            </div>
        </div>
    );
}