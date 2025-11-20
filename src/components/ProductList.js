import React from 'react';

export default function ProductList({ products, onDelete }) {
  const placeholder = 'https://via.placeholder.com/240x160?text=No+Image';

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="card">
              <div className="card-media">
                <img src={p.image || placeholder} alt={p.name} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <div className="card-price">${p.price}</div>
                <p className="card-desc">{p.description}</p>
              </div>
              <div className="card-actions">
                <button onClick={() => onDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
