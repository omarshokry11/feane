import React, {useState} from "react";
import ProductAll from "../Block/ProductAll";
import BurgerProduct from "../Block/BurgerProduct";
import PizzaProduct from "../Block/PizzaProduct";
import PastaProduct from "../Block/PastaProduct";
import FriesProduct from "../Block/FriesProduct";

import "./Style/OurMenu.scss";

export default function OurMenu() {

    const [active, setActive] = useState("All");

    return(
        <div className="main-our-menu-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Our Menu</h1>
                    </div>
                    <div className="col-12 text-center">
                        <div className="button-item">
                            <button className={active === "All" ? "btn-active" : ""} onClick={() => setActive("All")}>All</button>
                            <button className={active === "Burger" ? "btn-active" : ""} onClick={() => setActive("Burger")}>Burger</button>
                            <button className={active === "Pizza" ? "btn-active" : ""} onClick={() => setActive("Pizza")}>Pizza</button>
                            <button className={active === "Pasta" ? "btn-active" : ""} onClick={() => setActive("Pasta")}>Pasta</button>
                            <button className={active === "Fries" ? "btn-active" : ""} onClick={() => setActive("Fries")}>Fries</button>
                        </div>
                    </div>
                    <div className="col-12">
                        {active === "All" ? <ProductAll /> : null}
                        {active === "Burger" ? <BurgerProduct /> : null}
                        {active === "Pizza" ? <PizzaProduct /> : null}
                        {active === "Pasta" ? <PastaProduct /> : null}
                        {active === "Fries" ? <FriesProduct /> : null}
                    </div>
                    <div className="col-12 text-center">
                        <button className="view-more">View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}