import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { css } from "@emotion/react";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/todo";



function App() {
    return (
        <div css={style}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const style = css`
    width: 100vw;
    min-height: 100%;

    .wrapper-center {
        display: flex;
        justify-content: center;
    }
`


export default App;