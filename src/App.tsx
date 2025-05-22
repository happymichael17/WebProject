// App.tsx or main router file
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from "./pages/ServicesPage.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";
import {EcitizenDetails} from "./pages/EcitizenDetails.tsx";
import ContactUsPage from "./pages/ContactUsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/case-studies" element={<CaseStudyPage />} />
                <Route path="case-study/ecitizen-details" element={<EcitizenDetails />} />
                <Route path="/contact-us" element={<ContactUsPage/>} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
