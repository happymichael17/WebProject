import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TrustedBrands from "./components/TrustedBrands";

// Main App Component with Router
export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <HeroSection />
                                <TrustedBrands />
                            </>
                        } />
                        <Route path="/privacy-policy" element={
                            <div className="p-10 max-w-4xl mx-auto">
                                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                                <p className="mb-4">At Webmasters Kenya Ltd, we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information when you use our services.</p>
                                <p className="mb-4">Founded over two decades ago, Webmasters Kenya Ltd has grown from a small IT startup into one of the leading technology solution providers in Kenya, delivering innovative and custom-tailored solutions to businesses and government institutions.</p>
                            </div>
                        } />
                        <Route path="/terms-of-use" element={
                            <div className="p-10 max-w-4xl mx-auto">
                                <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
                                <p className="mb-4">These terms govern your use of our services. Webmasters Kenya Ltd specializes in custom software development tailored to meet the unique needs and specifications of our clients across multiple industries.</p>
                                <p className="mb-4">Our services include web development, software development, app development, and platform solutions, all designed to help businesses thrive in the digital landscape.</p>
                            </div>
                        } />
                        <Route path="/cookie-policy" element={
                            <div className="p-10 max-w-4xl mx-auto">
                                <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
                                <p className="mb-4">This Cookie Policy explains how Webmasters Kenya Ltd uses cookies and similar technologies to provide, customize, evaluate, improve, and secure our services.</p>
                                <p className="mb-4">We develop cutting-edge technology-enhanced solutions, software applications, and business platforms across multiple industries and business verticals, helping clients improve processes, profitability, and customer experience.</p>
                            </div>
                        } />
                        <Route path="/contact-us" element={
                            <div className="p-10 max-w-4xl mx-auto">
                                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                                <p className="mb-6">We'd love to hear from you! Contact Webmasters Kenya Ltd for innovative technology solutions tailored to your business needs.</p>
                                
                                {/* White input form section */}
                                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        // Show alert when form is submitted
                                        alert("Message sent successfully!");
                                        // Reset form fields
                                        e.target.reset();
                                    }}>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                                                placeholder="What is this regarding?"
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                                            <textarea 
                                                id="message" 
                                                rows={6} 
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                                                placeholder="Type your message here..."
                                                required
                                            ></textarea>
                                        </div>
                                        
                                        <button 
                                            type="submit" 
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-auto block"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                                
                                {/* Contact Information */}
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <h2 className="text-xl font-semibold mb-4 text-black">Webmasters Kenya Ltd</h2>
                                    <div className="space-y-2 mb-4 text-black">
                                        <p><span className="font-medium">Address:</span> Senteu Plaza 5th Floor, PQ2M+CQ3, Nairobi, Kenya</p>
                                        <p><span className="font-medium">Email:</span> admin@webmasters.co.ke</p>
                                        <p><span className="font-medium">Phone:</span> +254 720 250 520</p>
                                        <p><span className="font-medium">Hours:</span> Monday - Friday (9am - 6pm)</p>
                                    </div>
                                    <p className="italic text-gray-600 mt-4 pt-4 border-t border-gray-300">
                                        We help businesses elevate their value through custom software development, product design, QA and consultancy services.
                                    </p>
                                </div>
                            </div>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}