import React from 'react';

const Product = (props) => {
    // const {name, id} = props.product;
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid skyblue'}}>
            <h1>{product.name}</h1>
            <button onClick={() => addToCart(product.id, product.name)}>ADD TO CART</button>
        </div>
    );
};

export default Product;