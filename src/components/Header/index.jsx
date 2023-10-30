import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css";

function Header() {
    return (
        <header>
            <Link to={"/home"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/product"}>Produto</Link>
        </header>
    );
}

export default Header