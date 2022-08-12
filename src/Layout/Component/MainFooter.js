import React from "react";

import "./Style/MainFooter.scss";

export default function MainFooter() {
    return(
        <div className="main-footer-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h2>Contact Us</h2>
                        <p>Location</p>
                        <p>Call +01 123456789</p>
                        <p>demo@Gmail.com</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h2>Feane</h2>
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h2>Opening Hours</h2>
                        <p>Everyday</p>
                        <p>10.00 Am -10.00 Pm</p>
                    </div>
                    <div className="col-12">
                        <div className="inner-footer">
                            <p>&copy; 2022 All Rights Reserved By Free Html Templates</p>
                            <p>&copy; Distributed By ThemeWagon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}