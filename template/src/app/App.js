import './App.css';
// React Router Imports
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
// Page Imports
import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ErrorPage from '../pages/errorPage/ErrorPage';

// Perform other imports here

export default function App() {

    // When you add/remove/update routes, ensure that you update RouteLocations.js
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}