import React from "react";
import {Image} from "react-bootstrap";

export default function BurgerProduct() {

    const burgerProduct = [
        {id: 1, imgProduct: "img/f2.png", productName: "Delicious Burger", price :"15"},
        {id: 2, imgProduct: "img/f7.png", productName: "Tasty  Burger", price :"12"},
        {id: 3, imgProduct: "img/f8.png", productName: "Tasty  Burger", price :"14"},
    ]

    return(
        <div className="main-product-all-container">
            <div className="container">
                <div className="row">
                    {burgerProduct.map((burger) => <div className="col-lg-4 col-md-6 col-12" key={burger.id}>
                        <div className="Product-item">
                            <div className="img-product">
                                <Image src={burger.imgProduct} />
                            </div>
                            <div className="details-product">
                                <h5 className="product-name">{burger.productName}</h5>
                                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                <span className="product-price">${burger.price}</span>
                                <span className="icon-cart">
                                    <Image src="/img/cart.svg" />
                                </span>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}