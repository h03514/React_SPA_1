import Title from "./Title";
import { Link } from "react-router-dom";

export default function Checkout() {

    let cartItem = {
        "cartItems":
            [
                {
                    "id": 5,
                    "name": "蘋果",
                    "image": "apple.jpg",
                    "price": 10,
                    "description": "新鮮蘋果50克，好吃營養",
                    "quantity": 3
                },
                {
                    "id": 4,
                    "name": "西瓜",
                    "image": "watermelon.jpg",
                    "price": 25,
                    "description": "香甜西瓜10斤，夏季必備",
                    "quantity": 6
                }
            ]


    }

    let { cartItems } = cartItem;
    let cartEmpty = cartItems.length <= 0 ? true : false;

    let grandTotal = cartItems.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)

    const freeShipPrice = 99;

    return (
        <div>
            <Title mainTitle="你的購物車" />

            {
                cartEmpty &&
                <div>
                    購物車現在沒有商品<br />
                    <Link to="/">去產品業看看吧</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div>
                    <div id="cartSection">
                        {/* 產品列表 */
                            cartItems.map(product => ( //備註:JSX 箭頭函式"{}"需改成"()"
                                <div key={product.id}>
                                    <img alt="abc" src={process.env.PUBLIC_URL + '/img/' + product.image} />
                                    {product.name}
                                    {product.description}
                                    {product.price}
                                    購買數量{product.quantity}
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkOutSection">
                        <div>全部貨品總共</div>
                        <div>{grandTotal}元</div>
                        {
                            /* 價錢總數+免費送貨 */
                            grandTotal >= freeShipPrice ?
                                <div>我們免費送貨</div> :
                                <div>滿${freeShipPrice}免費送貨<br />
                                    還差{freeShipPrice - grandTotal}</div>
                        }
                    </div>
                </div>
            }

        </div>
    )
}