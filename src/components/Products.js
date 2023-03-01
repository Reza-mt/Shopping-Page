import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    <li><Link to='/products/1' >Products 1</Link></li>
                    <li><Link to='/products/2' >Products 2</Link></li>
                    <li><Link to='/products/3' >Products 3</Link></li>
                    <li><Link to='/products/4' >Products 4</Link></li>
                </ul>
            </div>
        );
    }
}

export default Products;