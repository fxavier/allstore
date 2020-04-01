import React, { Component } from "react";
import { linkData } from "./linkData";
const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData
  };
  //Handle Sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //Handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  //Close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  //Open Cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleSidebar,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
