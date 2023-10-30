import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Product from "./pages/product/Product";


const MainRoutes = () => {

    const [user, setUser] = useState(null);

    const login = (user, password) => {
        console.log("Login auth", { user, password });
        setUser({ id: "123", user });
    }

    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/product" element={<Product />} />
        </Routes>
    )
}

export default MainRoutes