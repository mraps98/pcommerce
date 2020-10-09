import React from 'react';
import "./CartProduct.css";
import {Button, Card} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {actionTypes} from "../reducers/cartReducer";

function CartProduct({id, name, imageUrl, price}) {
    const dispatch = useDispatch();
    return (
        <Card className="cartproduct">
            <p className="cartproduct__name">
                {name}
            </p>
            <img src={imageUrl} className="cartproduct__image"/>
            <p className="cardproduct__price">
                <small>$</small> <strong>{price}</strong>
            </p>
            <Button
                variant="contained"
                color="primary" 
                className="cartproduct__button" 
                onClick={()=>dispatch({
                    type: actionTypes.REMOVE_FROM_CART,
                    payload: {
                        id: id,
                        name: name,
                        imageUrl: imageUrl,
                        price: price,
                    }
                })}>
                    Remove from cart
            </Button>
        </Card>
    )
}

export default CartProduct;
