// src/components/Navbar.tsx
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full py-4 px-6 md:px-12 bg-white flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/logo.svg" alt="Web Masters Logo" className="h-7" />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-8">
                    {["ABOUT", "SERVICES", "PRODUCTS", "CASE STUDIES", "CONTACT"].map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.toLowerCase()}`} className="text-black hover:text-red-500 font-medium text-sm relative">
                                <span className="inline-block text-red"> <span className="text-red-400">•</span> {item}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Sign Up Button */}
            <div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition duration-300 flex items-center gap-2">
                    <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
                        <ArrowRight className="w-3 h-4" />
                    </div>
                    <span className="text-sm">Sign In</span>
                </button>
            </div>
        </header>
    );
}
