import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Image} from "react-bootstrap";

import "./Style/CarouselAlice.scss";

export default function CarouselAlice() {

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 2},
        1024: {items: 2},
    };

    const clientItems = [
        {id: 1, imgUser: "/img/client1.jpg", userName: "Moana Michell"},
        {id: 2, imgUser: "/img/client2.jpg", userName: "Mike Hamell"},
        {id: 3, imgUser: "/img/client1.jpg", userName: "Moana Michell"},
        {id: 4, imgUser: "/img/client2.jpg", userName: "Mike Hamell"},
        {id: 5, imgUser: "/img/client1.jpg", userName: "Moana Michell"},
        {id: 6, imgUser: "/img/client2.jpg", userName: "Mike Hamell"}
    ]

    return(
        <div className="main-carousel-alice-container">
            <div className="title">
                <h1>What Says Our Customers</h1>
            </div>
            <div className="products-carousel-section container">
                <AliceCarousel
                    autoPlay
                    activeIndex={0}
                    infinite={true}
                    responsive={responsive}
                    autoPlayInterval={1500}
                    fadeOutAnimation={false}
                    dotsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                >
                    {clientItems.map((client) => <div className="client-item" key={client.id}>
                        <div className="client-details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda laborum qui reiciendis temporibus! Cum debitis ex incidunt ullam voluptatum.</p>
                            <h3>{client.userName}</h3>
                            <h6>magna aliqua</h6>
                        </div>
                        <div className="img-client">
                            <span> </span>
                            <Image src={client.imgUser} className="user-img" />
                        </div>
                    </div>)}
                </AliceCarousel>
            </div>
        </div>
    )
}