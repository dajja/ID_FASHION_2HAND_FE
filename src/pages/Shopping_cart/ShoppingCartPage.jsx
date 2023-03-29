import './ShoppingCartPage.scss';
import React from 'react'
import { Checkbox } from 'antd';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';

const accuracy = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

export default function ShoppingCartPage() {
    return (
        <>
            <div className='cart-container'>
                <Header />
                <Breadcrumb />
                <div className='cart-content pad-15-20'>
                    <h2>Shopping Cart</h2>
                    <div className='cart-content-infor col-10'>
                        <div className='cart-content-1 col-10'>
                            <i class="fa-solid fa-chevron-left"></i>
                            <a href="/">Continue shopping</a>
                        </div>
                        <div className='cart-content-2 col-10'>
                            <table className='cart-table col-10'>
                                <tr>
                                    <th className='cl-1'>Item</th>
                                    <th className='cl-2'>Color</th>
                                    <th className='cl-2'>Size</th>
                                    <th className='cl-2'>QTY</th>
                                    <th className='cl-2'>Price</th>
                                    <th className='cl-3'></th>
                                </tr>
                                <tr className='col-10'>
                                    <td className='cl-1 col-10'>
                                        <div className='td-item'>
                                            <div className='td-item-img'>
                                                <img src="/Image/giay1.jpg" alt="" />
                                            </div>
                                            <div className='td-item-name'>
                                                Lorem ipsum dolor sit amet consectetur adipisicingnda mollitia impedi
                                            </div>
                                        </div>
                                    </td>
                                    <td className='cl-2 col-10'>
                                        <div className='td-color'>
                                            <div></div>
                                            <div>Black</div>
                                        </div>
                                    </td>
                                    <td className='cl-2 col-10'>US100000</td>
                                    <td className='col-10'>
                                        <div className='td-amount'>
                                            <div style={{fontSize: '20px'}}>2</div>
                                            <div className='td-amount-btn'>
                                                <button className='td-btn-up'>+</button>
                                                <button className='td-btn-down'>-</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='cl-2 col-10'>$1500</td>
                                    <td className='cl-3 col-10'>
                                        <button>X Remove</button>
                                    </td>
                                </tr>
                            </table>
                            <div className="cart-shipping">
                                <div>Shipping:</div>
                                <div>Free</div>
                            </div>
                            <div className="cart-shipping">
                                <div>Subtotal:</div>
                                <div>$250</div>
                            </div>
                            <div className="cart-shipping">
                                <h3>Cart total:</h3>
                                <div>$250</div>
                            </div>
                            <div className="btn-checkout">
                                <Checkbox onChange={accuracy}>I have a coupon code</Checkbox>
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer /> 
            </div>

        </>
    )
}
