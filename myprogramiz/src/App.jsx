import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from "./SignUp";
import Login from "./login";
import Python from "./Python";
import JavaScript from "./JavaScript";
import Home from "./Home";
import C from "./C";
import Java from "./Java";
import TypeScript from "./TypeScript";
function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/py" element={<Python/>}></Route>
                <Route path="/js" element={<JavaScript/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/c" element={<C/>}></Route>
                <Route path="/Java" element={<Java/>}></Route>
                <Route path="/TypeScript" element={<TypeScript/>}></Route>

            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App