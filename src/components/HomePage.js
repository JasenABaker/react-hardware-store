import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'

class HomePage extends Component {
    ///first method stylistcally inside your class
    constructor() {
        super();//always need to do this
        //super is the constructor of component

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            adminView: true,
            editSaleItem: true,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Its a hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Its a nail',
                    price: 0.12,
                }
            ],
            cartList: []
        };
    }
    ///javaScript does not have a concept of class variables
    //we are not in a function we are in the class
    //so therefore we do not need const or let inside the class
    // we creating a method on this class called 'toggleEditSaleItem'

    //this is a custom method
    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem; ///flipping the value of something that is boolean
        this.setState({ editSaleItem })///set the state
    }
    toggleAdmin = () => {
        const Admin = !this.state.adminView
        this.setState({ adminView: Admin })
    }
    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale })
    }
    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList]
        productList.push(newProduct)
        this.setState({ productList })
    }
    ///test the function with the dev tools
    deleteProductFromProductList = (index) => {
        const productList = [...this.state.productList]
        productList.splice(index, 1)
        this.setState({ productList })
    }
    addProductToCart = (index) => {
        const product = { ...this.state.productList[index] }
        const cartList = { ...this.state.cartList }

        cartList.push(product)

        this.setState({ cartList })
    }
    removeProductFromCart = (index) => {
        const cartList = { ...this.state.cartList }

        cartList.splice(index, 1)

        this.setState({ cartList })
    }
    render() {
        const adminView =
            <AdminView productList={this.state.productList}
                addNewProductToProductList={this.addNewProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList} />
        const shopView = <ShopView productList={this.state.productList}
            addProductToCart={this.addProductToCart} />
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <div>
                        {
                            this.state.editSaleItem ?
                                <div>
                                    <input
                                        onChange={this.handleItemCurrentlyOnSaleChange}
                                        value={this.state.itemCurrentlyOnSale}
                                        type="text" />
                                </div>
                                : null
                        }
                    </div>
                    <div>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                        </button>
                    </div>
                    <div>
                        <button onClick={this.toggleAdmin}>
                            {this.state.adminView ? 'Show Shop View' : 'Show Admin View'}
                        </button>
                    </div>
                    <div>
                        {this.state.adminView ? adminView : shopView}

                        <CartView
                            productList={this.state.cartList}
                            removeProductFromCart={this.removeProductFromCart} />

                    </div>
                </div>
            </div>
        )
    }/// Use null to show nothing
}

export default HomePage;
