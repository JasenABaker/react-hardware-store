import React, { Component } from 'react'
import ProductList from './ProductList'

class ShopView extends Component {
    render() {
        return (
            <div>
                <h1>Shop</h1>
                <h2>Products</h2>
                <ProductList productList = {this.props.productList}
                    viewMode={'SHOP'}
                    addProductToCart={this.props.addProductToCart}/>
            </div>
        );
    }
}

export default ShopView;