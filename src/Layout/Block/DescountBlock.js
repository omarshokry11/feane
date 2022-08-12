import React from "react";
import {Image} from "react-bootstrap";

import "./Style/DescountBlock.scss";

export default function DescountBlock() {

    const descountItems = [
        {id: 1, img: "/img/o1.jpg", title: "Tasty Thursdays", desc: "20%", span: "off"},
        {id: 2, img: "/img/o2.jpg", title: "Pizza Days", desc: "15%", span: "off"},
    ]

    return(
        <div className="main-descount-block-container">
            <div className="container">
                <div className="row">
                    {descountItems.map((order) => <div className="col-md-6 col-12" key={order.id}>
                        <div className="order-item">
                            <div className="img-order">
                                <Image src={order.img} />
                            </div>
                            <div className="order-details">
                                <h5>{order.title}</h5>
                                <h6>{order.desc} <span>{order.span}</span></h6>
                                <button>order Now <Image src="/img/cart.svg" /></button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}