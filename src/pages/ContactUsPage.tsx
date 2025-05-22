
import { Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { useState } from "react";

const ContactUsPage = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle form submission logic here
    };

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/contact_bg_picture.svg')" }}
        >
            <div>
                <Navbar />
            </div>
            <div
                className="relative container mx-auto py-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 gap-8"
            >
                {/* Left Column - Information */}
                <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
                    <div className="mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kickstart Your Digital Journey</h2>
                        <p className="text-sm opacity-90 mb-6">
                            If you would like your project to be implemented by Webmasters,
                            please, do not hesitate to get in touch with us at any time via
                            phone, email or by filling out the contact form.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mb-8">
                            <a href="#" className="bg-opacity-20 p-2 rounded">
                                <Instagram size={18} className="text-white" />
                            </a>
                            <a href="#" className="bg-opacity-20 p-2 rounded">
                                <Twitter size={18} className="text-white" />
                            </a>
                            <a href="#" className="bg-opacity-20 p-2 rounded">
                                <Facebook size={18} className="text-white" />
                            </a>
                            <a href="#" className="bg-opacity-20 p-2 rounded">
                                <Linkedin size={18} className="text-white" />
                            </a>
                            <a href="#" className="bg-opacity-20 p-2 rounded">
                                <Youtube size={18} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="flex flex-wrap justify-start gap-2">
                        <div
                            className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-full sm:w-[250px] mx-0 my-2"
                        >
                            <div className="rounded-md p-2">
                                <img src="/user.svg" alt="mailbox" className="w-6 h-6" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-sm">Our Mailbox</h3>
                                <p className="text-xs">admin@webmasters.com</p>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-full sm:w-[250px] mx-0 my-2"
                        >
                            <div className="rounded-md p-2">
                                <img src="/user.svg" alt="location" className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-sm">Our Address</h3>
                                <p className="text-sm">P.O.H+CQ3, Nairobi</p>
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-full sm:w-[250px] mx-0 my-2"
                        >
                            <div className="rounded-md p-2">
                                <img src="/user.svg" alt="location" className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-sm">Our Phone</h3>
                                <p className="text-sm">+254 700 200 500</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="w-full md:w-[550px]">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h2 className="text-xl sm:text-2xl font-bold text-black text-center mb-6">Get In Touch</h2>
                        <p className="text-gray-500 text-center text-sm mb-6">
                            Talk to us and we will answer all your questions.
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@gmail.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={form.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="0723 456 789"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    How can we help?
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis purus. Proin vitae varius eros. Sed nec lobortis turpis."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2"
                            >
                                <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
                                    <ArrowRight className="w-3 h-4" />
                                </div>
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactUsPage;

// import {Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight} from 'lucide-react';
// import Navbar from "../components/Navbar.tsx";
// import Footer from "../components/Footer.tsx";
//
// const ContactUsPage = () => {
//
//
//     return (
//
//         <div className="relative w-full min-h-screen  " style={{backgroundImage: "url('/contact_bg_picture.svg')"}}>
//             <div>
//                 <Navbar/>
//             </div>
//             <div
//                 className="relative container mx-auto  py-12 flex flex-col px-32 md:flex-row items-center justify-between ">
//                 {/* Left Column - Information */}
//                 <div className="w-full md:w-1/2 text-white">
//                     <div className="mb-10">
//                         <h2 className="text-3xl font-bold mb-3">Kickstart Your Digital Journey</h2>
//                         <p className="text-sm opacity-90 mb-6">
//                             If you would like your project to be implemented by Webmasters,
//                             please, do not hesitate to get in touch with us at any time via
//                             phone, email or by filling out the contact form.
//                         </p>
//
//                         {/* Social Media Icons */}
//                         <div className="flex space-x-4 mb-8">
//                             <a href="#" className=" bg-opacity-20 p-2 rounded">
//                                 <Instagram size={18} className="text-white"/>
//                             </a>
//                             <a href="#" className=" bg-opacity-20 p-2 rounded">
//                                 <Twitter size={18} className="text-white"/>
//                             </a>
//                             <a href="#" className=" bg-opacity-20 p-2 rounded">
//                                 <Facebook size={18} className="text-white"/>
//                             </a>
//                             <a href="#" className=" bg-opacity-20 p-2 rounded">
//                                 <Linkedin size={18} className="text-white"/>
//                             </a>
//                             <a href="#" className=" bg-opacity-20 p-2 rounded">
//                                 <Youtube size={18} className="text-white"/>
//                             </a>
//                         </div>
//                     </div>
//
//                     {/* Contact Info Cards */}
//                     <div className="flex flex-wrap justify-left ">
//                         <div
//                             className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-[250px] mx-1 my-2">
//                             <div className="rounded-md p-2">
//                                 <img src="/user.svg" alt="mailbox" className="w-6 h-6"/>
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="font-bold text-sm">Our Mailbox</h3>
//                                 <p className="text-xs">admin@webmasters.com</p>
//                             </div>
//                         </div>
//
//                         <div
//                             className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-[250px] mx-1 my-2">
//                             <div className="rounded-md p-2">
//                                 <img src="/user.svg" alt="location" className="w-5 h-5 text-white"/>
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="font-bold text-sm">Our Address</h3>
//                                 <p className="text-sm">P.O.H+CQ3, Nairobi</p>
//                             </div>
//                         </div>
//
//                         <div
//                             className="bg-white rounded-lg p-6 text-gray-800 shadow-lg flex flex-col items-center h-auto w-[250px] mx-1 ">
//                             <div className="rounded-md p-2">
//                                 <img src="/user.svg" alt="location" className="w-5 h-5 text-white"/>
//                             </div>
//                             <div className="text-center">
//                                 <h3 className="font-bold text-sm">Our Phone</h3>
//                                 <p className="text-sm">+254 700 200 500</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Right Column - Contact Form */}
//                 <div className="w-full md:w-[550px]">
//                     <div className="bg-white rounded-2xl p-6 shadow-lg">
//                         <h2 className="text-2xl font-bold text-black text-center mb-6">Get In Touch</h2>
//                         <p className="text-gray-500 text-center text-sm mb-6">Talk to us and we will answer all your
//                             questions.</p>
//
//                         <div className="space-y-4">
//                             <div>
//                                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full
//                                     Name</label>
//                                 <input
//                                     type="text"
//                                     id="fullName"
//                                     name="fullName"
//                                     value=""
//                                     onChange={() => {
//                                     }}
//                                     placeholder="John Doe"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 />
//                             </div>
//
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email
//                                     Address</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value=""
//                                     onChange={() => {
//                                     }}
//                                     placeholder="johndoe@gmail.com"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 />
//                             </div>
//
//                             <div>
//                                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone
//                                     Number</label>
//                                 <input
//                                     type="tel"
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     value=""
//                                     onChange={() => {
//                                     }}
//                                     placeholder="0723 456 789"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 />
//                             </div>
//
//                             <div>
//                                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How
//                                     can we help?</label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value=""
//                                     onChange={() => {
//                                     }}
//                                     rows={4}
//                                     placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis purus. Proin vitae varius eros. Sed nec lobortis turpis."
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 />
//                             </div>
//
//                             <button
//                                 onClick={() => {
//                                 }}
//                                 className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-2"
//                             >
//                                 <div
//                                     className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
//                                     <ArrowRight className="w-3 h-4"/>
//                                 </div>
//                                 <span>Send</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <Footer/>
//             </div>
//         </div>
//     );
// };
//
// export default ContactUsPage;