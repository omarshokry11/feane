import React from "react";
import CoverHomePage from "../Block/CoverHomePage";
import DescountBlock from "../Block/DescountBlock";
import OurMenu from "../Component/OurMenu";
import AboutItem from "../Component/AboutItem";

import "./Style/HomePage.scss";
import CarouselAlice from "../Component/CarouselAlice";

export default function HomePage() {
    return(
        <div className="main-home-page-container">
            <CoverHomePage />
            <DescountBlock />
            <OurMenu />
            <AboutItem />
            <CarouselAlice />
        </div>
    )
}