import {useState, useEffect} from "react";
import {ArrowRight, Menu, X} from "lucide-react";

const navItems = [
    {label: "HOME", path: "/"},
    {label: "ABOUT", path: "/about"},
    {label: "SERVICES", path: "/services"},
    {label: "PRODUCTS", path: "/products"},
    {label: "CASE STUDIES", path: "/case-studies"},
    {label: "CONTACT", path: "/contact-us"},
];

export default function Navbar() {
    // Mock location for demo - replace with useLocation() in your app
// Use window.location.pathname for current page detection
    const location = typeof window !== "undefined" ? {pathname: window.location.pathname} : {pathname: "/"};
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Close mobile menu when clicking outside or resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpen && !(event.target as HTMLElement).closest('header')) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header
            className="w-full py-3 sm:py-4 px-3 sm:px-6 lg:px-8 xl:px-16 2xl:px-28 bg-white flex items-center justify-between shadow-md  relative z-40">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
                <a href="/" className="cursor-pointer">
                    <img
                        src="/logo.svg"
                        alt="Web Masters Logo"
                        className="h-6 sm:h-7 w-auto"
                    />
                </a>
            </div>

            {/* Desktop Nav - Hidden on mobile and tablet */}
            <nav className="hidden lg:flex flex-1 justify-center">
                <ul className="flex space-x-6 xl:space-x-8">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className={`text-black hover:text-red-500 font-medium text-xs xl:text-sm transition-colors duration-200 relative group ${
                                        isActive ? "text-red-500" : ""
                                    }`}
                                >
                  <span className="inline-block">
                    <span className="text-[#F3A81C]">•</span> {item.label}
                  </span>
                                    {/* Hover underline effect */}
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Mobile/Tablet Hamburger - Visible on screens smaller than lg */}
            <div className="lg:hidden">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleMenu();
                    }}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    type="button"
                >
                    {menuOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                    ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black"/>
                    )}
                </button>
            </div>

            {/* Desktop Sign Up button */}
            <div className="hidden lg:block flex-shrink-0">
                <button
                    className="bg-red-500 text-white px-4 xl:px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg">
                    <div
                        className="flex items-center justify-center w-3 xl:w-4 h-3 xl:h-4 bg-white rounded-full text-red-500 group-hover:rotate-45 transition-transform duration-300">
                        <ArrowRight className="w-2 xl:w-3 h-2 xl:h-3"/>
                    </div>
                    <span className="text-xs xl:text-sm">Sign Up</span>
                </button>
            </div>

            {/* Mobile/Tablet Menu Dropdown */}
            <div
                className={`absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl lg:hidden z-50 transition-all duration-300 ease-in-out ${
                    menuOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                }`}
            >
                {/* Close Button */}
                <div className="flex justify-end px-6 pt-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>

                <nav className="max-h-screen overflow-y-auto">
                    <ul className="flex flex-col px-4 pb-6">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={index}>
                                    <a
                                        href={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg text-black hover:text-red-500 hover:bg-gray-100 font-medium text-base sm:text-lg transition-all duration-200 ${
                                            isActive ? "text-red-500 bg-red-50" : ""
                                        }`}
                                    >
                            <span className="flex items-center gap-2">
                                <span className="text-red-400">•</span> {item.label}
                            </span>
                                    </a>
                                </li>
                            );
                        })}

                        {/* Mobile Sign Up Button */}
                        <li className="pt-6 px-4">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-3 group hover:shadow-lg"
                            >
                                {/* Arrow in a white circle */}
                                <span
                                    className="bg-white text-red-500 rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight className="w-4 h-4"/>
    </span>
                                <span className="text-base">Sign Up</span>
                            </button>

                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-30"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}


// import {ArrowRight} from "lucide-react";
// import {useLocation} from "react-router-dom";
//
// const navItems = [
//     {label: "ABOUT", path: "/about"},
//     {label: "SERVICES", path: "/services"},
//     {label: "PRODUCTS", path: "/products"},
//     {label: "CASE STUDIES", path: "/case-studies"},
//     {label: "CONTACT", path: "/contact-us"},
// ];
//
// export default function Navbar() {
//     const location = useLocation();
//     return (
//         <header className="w-full py-4 md:px-28 bg-white flex items-center justify-between shadow-md mb-4">
//             <div className="flex items-center">
//                 <img src="/logo.svg" alt="Web Masters Logo" className="h-7"/>
//             </div>
//             <nav className="hidden md:flex">
//                 <ul className="flex space-x-8">
//                     {navItems.map((item, index) => {
//                         const isActive = location.pathname === item.path;
//                         return (
//                             <li key={index}>
//                                 <a
//                                     href={item.path}
//                                     className={`text-black hover:text-red-500 font-medium text-sm relative${isActive ? " text-red-500" : ""}`}
//                                 >
//                                                                 <span className="inline-block text-red">
//                                                                     <span className="text-red-400">•</span> {item.label}
//                                                                 </span>
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </nav>
//             <div>
//                 <button
//                     className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition duration-300 flex items-center gap-2">
//                     <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full text-red-500">
//                         <ArrowRight className="w-3 h-4"/>
//                     </div>
//                     <span className="text-sm">Sign Up</span>
//                 </button>
//             </div>
//         </header>
//     );
// }