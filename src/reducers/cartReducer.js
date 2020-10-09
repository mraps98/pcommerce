export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CHECKOUT: "CHECKOUT"
};

export const getCartTotal = (cart) => (
    (cart?.reduce((amount, item)=>item.price+amount, 0)).toFixed(2)
);

export const cartReducer = (initialState=[], action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return [...initialState, action.payload]
        case actionTypes.REMOVE_FROM_CART:
            let updatedState = [...initialState];
            const index = initialState.findIndex(product=>product.id === action.payload.id);
            if(index>=0){
                updatedState.splice(index, 1);
            }
            return updatedState;
        case actionTypes.CHECKOUT:
            alert("Thank you for shopping at PCommerce");
            return [];
        default:
            return initialState;
    }
};