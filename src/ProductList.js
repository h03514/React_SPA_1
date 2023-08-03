import { Link } from "react-router-dom";
import styles from './ProductList.module.css';
import { useState, useEffect } from 'react';
import Title from "./Title";

export default function ProductList() {


    let [porductList, setProductList] = useState([]);

    useEffect(() => {
        // 1: 無第二個參數 : component 每次 render都會觸發
        // 2: Dependency Array是空的array時，只會在第一次網頁render時會觸發
        // 3: Dependency Array有變數時，第一次網頁render時 + 指定的變數改變 會觸發
        fetch('https://marktoast.com/demoapi/react-basic-product.json')
            .then(res => res.json())
            .then(data => setProductList(data))
            .catch(err => console.log(err));
    },[]) // <== Dependency Array
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