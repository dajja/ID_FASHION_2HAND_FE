import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import SignInPage from "../components/SingIn/SignInPage";
import SignUpPage from '../components/SignUp/SignUpPage';
import Homepage from "../pages/homepage/Homepage";
import Account from "../pages/accountPage/Account";
import About from "../pages/aboutPage/About";
import Checkout from "../pages/checkout/Checkout";
import LookBookPage from "../pages/LookBook/LookBookPage";
import ShoppingCartPage from "../pages/Shopping_cart/ShoppingCartPage";
function Root() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/signin" element={<SignInPage/>} />
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/username" element={<Account/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/lookbook" element={<LookBookPage/>} />
                    <Route path="/cart" element={<ShoppingCartPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root;