import React from "react";
import MainNavbar from "./Layout/Component/MainNavbar";
import HomePage from "./Layout/Pages/HomePage";
import MenuPage from "./Layout/Pages/MenuPage";
import AboutPage from "./Layout/Pages/AboutPage";
import MainFooter from "./Layout/Component/MainFooter";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
    return(
        <div className="main-app-content">
            <Router>
                <MainNavbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <MainFooter />
            </Router>
        </div>
    )
}