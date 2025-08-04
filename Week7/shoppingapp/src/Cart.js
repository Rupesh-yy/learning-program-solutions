import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-card">
        <h2>Item: {this.props.itemName}</h2>
        <p>Price: ₹{this.props.price}</p>
      </div>
    );
  }
}

export default Cart;
