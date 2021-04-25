import React from 'react';

const Product = (props) => {
    const {name, id} = props.product
    return (
        <div style={{border: '1px solid skyblue'}}>
            <h1>{name}</h1>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Product;