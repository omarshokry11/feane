import React from "react";
import {Image} from "react-bootstrap";

import "./Style/AboutItem.scss";

export default function AboutItem() {
    return(
        <div className="main about-item-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 text-center">
                       <Image src="/img/about-img.png" />
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="about-details">
                            <h2>We Are Feane</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                            </p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}