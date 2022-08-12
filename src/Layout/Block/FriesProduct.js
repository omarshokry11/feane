import React from "react";
import {Image} from "react-bootstrap";

export default function FriesProduct() {

    const friesProduct = [
        {id: 1, imgProduct: "img/f5.png", productName: "French Fries", price :"10"},
    ]

    return(
        <div className="main-product-all-container">
            <div className="container">
                <div className="row">
                    {friesProduct.map((fries) => <div className="col-lg-4 col-md-6 col-12" key={fries.id}>
                        <div className="Product-item">
                            <div className="img-product">
                                <Image src={fries.imgProduct} />
                            </div>
                            <div className="details-product">
                                <h5 className="product-name">{fries.productName}</h5>
                                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                <span className="product-price">${fries.price}</span>
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