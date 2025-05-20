// App.tsx or main router file
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from "./pages/ServicesPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
        </BrowserRouter>
    );
}
