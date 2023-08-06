import { useState } from "react";

export default function QuantityBtn() {

    let [numInCart, setNumInCart] = useState(0);


    const handelAdd = () => {
        setNumInCart(numInCart + 1)
    }

    const handelSubtract = () => {
        setNumInCart(numInCart - 1)
    }

    return (
        <div>
            {
                (numInCart === 0) ?
                    <div onClick={handelAdd}>加入購物車</div> :
                    <div>
                        <span onClick={handelSubtract}>-</span>
                        {numInCart}件
                        <span onClick={handelAdd}>+</span>
                    </div>
            }
        </div>
    )

}