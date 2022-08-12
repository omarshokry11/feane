import React from "react";
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";

export default function DropdownItem({linkItems}) {
    return(
        <div className="dropdown-item">
            <ul>
                {linkItems.map((link) => <li key={link.id}><NavLink to={link.pathLink}>{link.linkName}</NavLink></li>)}
            </ul>
            <div className="d-lg-none d-block">
                <Image src="/img/user.svg" />
                <Image src="/img/cart.svg" />
                <Image src="/img/search.svg" />
                <button>Order Online</button>
            </div>
        </div>
    )
}