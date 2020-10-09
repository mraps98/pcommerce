import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useSelector} from "react-redux";

function Navbar() {
    const cart = useSelector(state=>state);
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/"><h1>PCommerce</h1></Link>
            </div>
            <div className="navbar__right">
                <Link to="/cart">
                    <ShoppingCartIcon />
                    <div className="navbar__cartCount">
                        {cart? cart.length: 0}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;