import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';


const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutUsPage /> },]
       )


export default function App() {
    return <RouterProvider router={router} />;
}
