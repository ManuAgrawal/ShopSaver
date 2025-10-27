import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    originalPrice: "",
    discountPrice: "",
    expiryDate: "",
  });

  // Add product
  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      name: "",
      image: "",
      originalPrice: "",
      discountPrice: "",
      expiryDate: "",
    });
  };

  // Remove product
  const handleRemove = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🛍️ ShopSaver Dashboard</h1>
        <p>Welcome, Seller! Manage your store efficiently.</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Monthly Income</h3>
          <p>₹48,200</p>
        </div>
        <div className="stat-card">
          <h3>Active Products</h3>
          <p>{products.length}</p>
        </div>
      </section>

      <section className="add-product">
        <h2>Add New Product</h2>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Original Price"
            value={formData.originalPrice}
            onChange={(e) =>
              setFormData({ ...formData, originalPrice: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Discount Price"
            value={formData.discountPrice}
            onChange={(e) =>
              setFormData({ ...formData, discountPrice: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={formData.expiryDate}
            onChange={(e) =>
              setFormData({ ...formData, expiryDate: e.target.value })
            }
            required
          />
          <button type="submit">+ Add Product</button>
        </form>
      </section>

      <section className="product-list">
        <h2>📦 Product List</h2>
        {products.length === 0 ? (
          <p className="no-products">No products added yet.</p>
        ) : (
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  <span className="original">₹{product.originalPrice}</span>{" "}
                  <span className="discount">₹{product.discountPrice}</span>
                </p>
                <p className="expiry">Expiry: {product.expiryDate}</p>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
