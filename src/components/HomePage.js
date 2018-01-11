import React, { Component } from 'react';

class HomePage extends Component {
    ///first method stylistcally inside your class
    constructor() {
        super();//always need to do this
        //super is the constructor of component

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true
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
    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale });
    };
    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span> <button onClick={this.toggleEditSaleItem}>
                        {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                    </button></span>

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
            </div>
        )
    }/// Use null to show nothing
}

export default HomePage;