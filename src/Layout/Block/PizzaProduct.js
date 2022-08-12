import React from "react";
import {Image} from "react-bootstrap";

export default function PizzaProduct() {

    const pizzaProduct = [
        {id: 1, imgProduct: "img/f1.png", productName: "Delicious Pizza", price :"20"},
        {id: 2, imgProduct: "img/f3.png", productName: "Delicious Pizza", price :"17"},
        {id: 3, imgProduct: "img/f6.png", productName: "Delicious Pizza", price :"15"},
    ]

    return(
        <div className="main-product-all-container">
            <div className="container">
                <div className="row">
                    {pizzaProduct.map((pizaa) => <div className="col-lg-4 col-md-6 col-12" key={pizaa.id}>
                        <div className="Product-item">
                            <div className="img-product">
                                <Image src={pizaa.imgProduct} />
                            </div>
                            <div className="details-product">
                                <h5 className="product-name">{pizaa.productName}</h5>
                                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                <span className="product-price">${pizaa.price}</span>
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