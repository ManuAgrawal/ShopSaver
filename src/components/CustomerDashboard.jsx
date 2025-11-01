import React, { useState } from "react";
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Soft Bread",
      originalPrice: 40,
      discountPercent: 25,
      expiry: "2025-12-20",
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      stock: 10,
    },
    {
      id: 2,
      name: "Soft Drink",
      originalPrice: 60,
      discountPercent: 20,
      expiry: "2025-11-15",
      image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=465",
      stock: 8,
    },
    {
      id: 3,
      name: "Maggie Noodles",
      originalPrice: 50,
      discountPercent: 30,
      expiry: "2025-12-10",
      image: "https://via.placeholder.com/150",
      stock: 12,
    },
  ]);

  const [cart, setCart] = useState([]);

  const calcDiscountPrice = (p) => {
    return (p.originalPrice - (p.originalPrice * p.discountPercent) / 100).toFixed(2);
  };

  const addToCart = (product) => {
    // Check if item already exists in cart
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // Increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Decrease stock
    setProducts(
      products.map((p) =>
        p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    // Restore stock when removing
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, stock: p.stock + item.quantity } : p
      )
    );

    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + calcDiscountPrice(item) * item.quantity,
    0
  );

  const confirmBooking = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert(`You booked ${cart.length} product(s) successfully 🎉`);
    setCart([]);
  };

  return (
    <div className="customer-dashboard">
      <h1>🛒 Customer Dashboard</h1>

      <div className="product-list">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>
              <span className="original">₹{p.originalPrice}</span>{" "}
              <span className="discounted">₹{calcDiscountPrice(p)}</span>
              <span className="percent"> ({p.discountPercent}% OFF)</span>
            </p>
            <p>Expiry: {p.expiry}</p>
            <p>Available: <strong>{p.stock}</strong></p>
            <button
              onClick={() => addToCart(p)}
              disabled={p.stock <= 0}
            >
              {p.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>Your Cart ({cart.length})</h2>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name} (x{item.quantity})</span>
            <span>₹{(calcDiscountPrice(item) * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
            <button className="confirm-btn" onClick={confirmBooking}>
              Confirm Booking
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
