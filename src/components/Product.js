import React from 'react';
import "./Product.css";
import {Button, Card} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {actionTypes} from "../reducers/cartReducer";

function Product({id, name, price, imageUrl}) {

    const dispatch = useDispatch();
    return (
        <Card className="product">
            <p className="product__name">
                {name}
            </p>
            <img src={imageUrl} className="product__image"/>
            <p className="product__price">
                <small>$</small> <strong>{price}</strong>
            </p>
            <Button 
                variant="contained"
                color="primary" 
                className="product__button" 
                onClick={()=>dispatch({type: actionTypes.ADD_TO_CART, payload:{id: id, name: name, imageUrl: imageUrl, price: price}})}>
                    Add to cart
            </Button>
        </Card>
    )
}

export default Product
