import React from "react";
import {Image} from "react-bootstrap";

export default function PastaProduct() {

    const pastaProduct = [
        {id: 1, imgProduct: "img/f4.png", productName: "Delicious Pasta", price :"18"},
        {id: 2, imgProduct: "img/f9.png", productName: "Delicious Pasta", price :"10"},
    ]

    return(
        <div className="main-product-all-container">
            <div className="container">
                <div className="row">
                    {pastaProduct.map((pasta) => <div className="col-lg-4 col-md-6 col-12" key={pasta.id}>
                        <div className="Product-item">
                            <div className="img-product">
                                <Image src={pasta.imgProduct} />
                            </div>
                            <div className="details-product">
                                <h5 className="product-name">{pasta.productName}</h5>
                                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                <span className="product-price">${pasta.price}</span>
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