import {ArrowRight} from "lucide-react";

import {useLocation} from "react-router-dom";

const navItems = [
    {label: "ABOUT", path: "/about"},
    {label: "SERVICES", path: "/services"},
    {label: "PRODUCTS", path: "/products"},
    {label: "CASE STUDIES", path: "/case-studies"},
    {label: "CONTACT", path: "/contact"},
];

export default function Navbar() {
    const location = useLocation();
    return (
        <header className="w-full py-4 px-6 md:px-12 bg-white flex items-center justify-between shadow-md mb-4">
            <div className="flex items-center">
                <img src="/logo.svg" alt="Web Masters Logo" className="h-7"/>
            </div>
            <nav className="hidden md:flex">
                <ul className="flex space-x-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className={`text-black hover:text-red-500 font-medium text-sm relative${isActive ? " text-red-500" : ""}`}
                                >
                                                                <span className="inline-block text-red">
                                                                    <span className="text-red-400">•</span> {item.label}
                                                                </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div>
                <button
                    className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition duration-300 flex items-center gap-2">
                    <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
                        <ArrowRight className="w-3 h-4"/>
                    </div>
                    <span className="text-sm">Sign Up</span>
                </button>
            </div>
        </header>
    );
}