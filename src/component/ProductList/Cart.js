import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart({ cart, onRemoveFromCart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <div className="cart-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button onClick={() => onRemoveFromCart(index)}>Remove</button>
                </div>
              ))}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <button className="go-back-button" onClick={() => navigate("/")}>
        Go Back
      </button>
    </>
  );
}
