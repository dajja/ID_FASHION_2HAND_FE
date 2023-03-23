import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import SignInPage from "../components/SingIn/SignInPage";
import SignUpPage from '../components/SignUp/SignUpPage';
import Homepage from "../pages/homepage/Homepage";
function Root() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/signin" element={<SignInPage/>} />
                    <Route path="/" element={<Homepage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root;