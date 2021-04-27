import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'MacBook Air', id: 1},
        {name: 'Acer', id: 2},
        {name: 'Asus', id: 3},
        {name: 'Dell', id: 4},
        {name: 'HP', id: 5},
    ]
}

const cardReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length+1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART: 
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart};
    
        default:
            return state;
    }
}

export default cardReducers;