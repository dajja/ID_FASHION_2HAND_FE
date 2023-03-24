import './ShoppingCartPage.scss';
import React from 'react'
import { InputNumber, Space, Checkbox } from 'antd';



const onChange = (value) => {
    console.log('changed', value);
};

const accuracy = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

export default function ShoppingCartPage() {
    return (
        <div className='shopping_cart'>
            <div className="breadcrumbs">
                <div>Home</div>
                <div><i class="fa-solid fa-angle-right"></i></div>
                <div>Men</div>
                <div><i class="fa-solid fa-angle-right"></i></div>
                <div>Shoe</div>
                <div><i class="fa-solid fa-angle-right"></i></div>
                <div>Shoping Cart</div>
            </div>
            <div className='page-title'>
                <h2>Shoping Cart</h2>
            </div>

            <div className='checkout_proceed'>
                <div className='title-cart'>
                    <i class="fa-solid fa-angle-left"></i>
                    <p> Continue shopping </p>
                </div>
                <div className='right_sidebar'>

                    <table>
                        <div className='title-product'>
                            <tr>
                                <th className='product'>Item</th>
                                <th className='color-product'>Color</th>
                                <th className='quantity-product'>Size</th>
                                <th className='price-product'>QTY</th>
                                <th>Price</th>
                            </tr>
                        </div>

                        <div className='cart-product'>
                            <tr>
                                <td className='product'>
                                    <ul className='image-product'><img src="../Image/Screenshot (64).png" alt="" /></ul>
                                    <ul className='name-code-product'>
                                        <ul className='name-product'>
                                            Everyday carry blue bottle YOLO neutra, tousled four loko
                                        </ul>
                                        <ul className='code-product'>
                                            <li>Sku:</li>
                                            <li>12345</li>
                                        </ul>
                                    </ul>

                                </td>
                                <td className='color-product'>Red</td>
                                <td className='side-product'>US 8 |EU 41</td>
                                <td className='quantity-product'>
                                    <Space>
                                        <InputNumber type={"number"} size="large" min={1} max={1000} defaultValue={1} onChange={onChange} />
                                    </Space>
                                </td>
                                <td className='price-product'>$150</td>
                                <td>
                                    <ul className='action'>
                                        <li>
                                            Delete
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-xmark"></i>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </div>
                        <div className='cart-product'>
                            <tr>
                                <td className='product'>
                                    <ul className='image-product'><img src="../Image/Screenshot (64).png" alt="" /></ul>
                                    <ul className='name-code-product'>
                                        <ul className='name-product'>
                                            Everyday carry blue bottle YOLO neutra, tousled four loko
                                        </ul>
                                        <ul className='code-product'>
                                            <li>Sku:</li>
                                            <li>12345</li>
                                        </ul>
                                    </ul>

                                </td>
                                <td className='color-product'>Red</td>
                                <td className='side-product'>US 8 |EU 41</td>
                                <td className='quantity-product'>
                                    <Space>
                                        <InputNumber size="large" min={1} max={1000} defaultValue={1} onChange={onChange} />
                                    </Space>
                                </td>
                                <td className='price-product'>$150</td>
                                <td>
                                    <ul className='action'>
                                        <li>
                                            Delete
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-xmark"></i>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </div>
                    </table>

                    <div className='delivery-code'>
                        <div className='delivery-title'>Shipping :</div>
                        <div className='code-delivery'>Free</div>
                    </div>

                    <div className='price-list'>
                        <div className='price-list-title'>Subtotal :</div>
                        <div className='subtotal-price'>$250</div>
                    </div>

                    <div className='price-cart-total'>
                        <div className='cart-total-tital'>Cart total :</div>
                        <div className='price-total'>$250</div>
                    </div>

                    <div className="btn-checkout">
                        <Checkbox onChange={accuracy}>I have a coupon code</Checkbox>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
