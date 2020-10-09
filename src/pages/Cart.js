import React from 'react';
import "./Cart.css";
import Navbar from "../components/Navbar";
import {useSelector, useDispatch} from "react-redux";
import CartProduct from "../components/CartProduct";
import {Button} from "@material-ui/core";
import {getCartTotal, actionTypes} from "../reducers/cartReducer";
import {Link} from "react-router-dom";

function Cart() {

    const cart = useSelector(state=>state);
    const cartTotal = getCartTotal(cart);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="cart__top">
                <Navbar />
            </div>
            <div className="cart__bottom">
                {
                    cart.length > 0?(
                        <>
                        <div className="cart__bottomLeft">
                            <h2 className="cart__title">Items in your cart:</h2>
                            <div className="cart__products">
                             {cart.map(item =>(<CartProduct id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />))}
                            </div>

                        </div>
                        <div className="cart__bottomRight">
                            <div className="cart__checkout">
                                <h2>Subtotal ({cart? cart.length:0} items):  {}</h2>
                                <div className="cart__checkoutItems">
                                    {cart.map(item => (
                                        <div className="cart__checkoutItem">
                                            <p className="cart__checkoutItemName">{item.name}</p>
                                            <p className="cart__checkoutItemPrice">$ {item.price}</p>
                                        </div>
                                    ))}
                                    <div className="cart__checkoutTotal">
                                        <p>Total:</p>
                                        <p><strong>$ {cartTotal}</strong></p>
                                    </div>
                                </div>
                                <Link to="/"><Button variant="contained" color="secondary" onClick={()=>dispatch({type:actionTypes.CHECKOUT})}>Checkout</Button></Link>
                            </div>
                        </div>
                        </>
                    ):(
                        <h2>No items in your cart</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Cart
