import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </React.Fragment>
    );
}


export default App;