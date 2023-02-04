import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { css } from "@emotion/react";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/todo";
import PrivateRoute from './components/permission/PrivateRoute';
import GuestRoute from "./components/permission/GuestRoute";



function App() {
    return (
        <div css={style}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<GuestRoute RouteComponent={Signin} />} />
                    <Route path="/signup" element={<GuestRoute RouteComponent={Signup} />} />
                    <Route path="/todo" element={<PrivateRoute RouteComponent={Todo} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const style = css`
    width: 100%;
    min-height: 100%;

    .wrapper-center {
        display: flex;
        justify-content: center;
    }
`


export default App;