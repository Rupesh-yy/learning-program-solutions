import React from 'react';
import Cart from './Cart';
import './App.css'; // Import the CSS file where this class is defined

class OnlineShopping extends React.Component {
  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        
        {/* This div applies Flexbox layout */}
        <div className="cart-container">
          <Cart itemName="Laptop" price="75000" />
          <Cart itemName="Smartphone" price="35000" />
          <Cart itemName="Headphones" price="2000" />
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
