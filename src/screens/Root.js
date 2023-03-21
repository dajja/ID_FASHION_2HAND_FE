import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import SignInPage from "../components/SingIn/SignInPage";
import SignUpPage from '../components/SignUp/SignUpPage';
function Root() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/signin" element={<SignInPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root;