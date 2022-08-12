import React, {useState} from "react";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import DropdownItem from "../Block/DropdownItem";

import "./Style/MainNavbar.scss";

export default function MainNavbar() {

    const [click, setClick] = useState();

    const linkItems = [
        {id: 1, linkName: "HOME", pathLink: "/"},
        {id: 2, linkName: "MENU", pathLink: "/menu"},
        {id: 3, linkName: "ABOUT", pathLink: "/about"},
    ]

    return(
        <div className="main-navbar-container">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-2 col-6">
                        <h2 className="logo-name">Feane</h2>
                    </div>
                    <div className="col-md-7 col-12 d-lg-block d-none text-center">
                        <ul>
                            {linkItems.map((link) => <li key={link.id}><NavLink to={link.pathLink}>{link.linkName}</NavLink></li>)}
                        </ul>
                    </div>
                    <div className="col-md-3 col-12 d-lg-block d-none">
                        <Image src="/img/user.svg" />
                        <Image src="/img/cart.svg" />
                        <Image src="/img/search.svg" />
                        <button>Order Online</button>
                    </div>
                    <div className="col-6 d-lg-none d-block" onClick={()=>setClick(!click)}>
                        <div className="dropdown-items">
                            <div> </div>
                            <div> </div>
                            <div> </div>
                        </div>
                    </div>
                    {click ? <DropdownItem linkItems={linkItems} /> : null}
                </div>
            </div>
        </div>
    )
}