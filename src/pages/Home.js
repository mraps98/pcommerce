import React from 'react';
import "./Home.css";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

function Home() {
    return (
        <div className="home">
            <div className="home__top">
                <Navbar />
            </div>
            <div className="home__bottom">
                <Products />
            </div>
        </div>
    )
}

export default Home;
