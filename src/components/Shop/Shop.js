import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'MacBook Air', id: 1},
        {name: 'Acer', id: 2},
        {name: 'Asus', id: 3},
        {name: 'Dell', id: 4},
        {name: 'HP', id: 5},
    ]
    return (
        <div>
            <h1>THIS IS SHOP</h1>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Shop;