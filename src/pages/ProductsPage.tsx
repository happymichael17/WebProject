import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

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
            <section className=" container bg-white sm:p-6 lg:p-12 mx-auto w-full">
                <h2 className="text-3xl font-bold text-center text-black fa-font-awesome mb-8">Browse By Services</h2>
                <div className="flex justify-center mb-12">
                    <div className="border-b border-gray-200 flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`pb-4 px-1 text-lg font-bold ${activeTab === tab.id ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-4xl shadow-sm p-6 flex flex-col">
                            <div className="mb-4 overflow-hidden rounded-4xl ">
                                <img
                                    src={service.image}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-lg font-bold text-black font-awesome">{service.title}</h3>
                                <button
                                    className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-4xl shadow-sm p-6 flex flex-col">
                            <div className="mb-4 overflow-hidden rounded-4xl ">
                                <img
                                    src={service.image}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-lg font-bold text-black font-awesome">{service.title}</h3>
                                <button
                                    className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-4xl shadow-sm p-6 flex flex-col">
                            <div className="mb-4 overflow-hidden rounded-4xl ">
                                <img
                                    src={service.image}
                                    className="w-full aspect-[5/4] object-cover"
                                    style={{objectPosition: "top"}}
                                />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                                <h3 className="text-lg font-bold text-black font-awesome">{service.title}</h3>
                                <button
                                    className={`rounded-full p-2 w-25 h-8 flex items-center justify-center border  bg-white text-black hover:bg-red-500 hover:text-white`}
                                >
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <Footer/>
        </div>
    );
}