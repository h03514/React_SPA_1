import { Link } from "react-router-dom";
import styles from './ProductList.module.css';
import { useState } from 'react';
import Title from "./Title";

export default function ProductList() {

    let porductList = [
        { "id": 1, "name": "蘋果", "price": 50, "image": "apple.jpg", "description": "新鮮蘋果50克" },
        { "id": 2, "name": "香蕉", "price": 30, "image": "banana.jpg", "description": "好吃香蕉100克" },
    ]

    return (
        <div>
            
            <Title mainTitle="請選擇要購買的水果" />
            <div>
                {
                   porductList.map((product) => {
                        return (
                            <div className={styles.productBorder} key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <Link to={'/product/' + product.id}>
                                    <img alt='' src={process.env.PUBLIC_URL + '/img/' + product.image} />
                                </Link>
                                <p>{product.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}