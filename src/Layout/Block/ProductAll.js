import React from "react";
import {Image} from "react-bootstrap";

export default function ProductAll() {

    const allProduct = [
        {id: 1, imgProduct: "img/f1.png", productName: "Delicious Pizza", price :"20"},
        {id: 2, imgProduct: "img/f2.png", productName: "Delicious Burger", price :"15"},
        {id: 3, imgProduct: "img/f3.png", productName: "Delicious Pizza", price :"17"},
        {id: 4, imgProduct: "img/f4.png", productName: "Delicious Pasta", price :"18"},
        {id: 5, imgProduct: "img/f5.png", productName: "French Fries", price :"10"},
        {id: 6, imgProduct: "img/f6.png", productName: "Delicious Pizza", price :"15"},
        {id: 7, imgProduct: "img/f7.png", productName: "Tasty Burger", price :"12"},
        {id: 8, imgProduct: "img/f8.png", productName: "Tasty Burger", price :"14"},
        {id: 9, imgProduct: "img/f9.png", productName: "Delicious Pasta", price :"10"},
    ]

    return(
        <div className="main-product-all-container">
            <div className="container">
                <div className="row">
                    {allProduct.map((item) => <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                        <div className="Product-item">
                            <div className="img-product">
                                <Image src={item.imgProduct} />
                            </div>
                            <div className="details-product">
                                <h5 className="product-name">{item.productName}</h5>
                                <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                <span className="product-price">${item.price}</span>
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