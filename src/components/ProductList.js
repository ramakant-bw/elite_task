import React from 'react';

export default function ProductList({ products, onDelete }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <ul>
          {products.map(p => (
            <li key={p.id} className="product-item">
              <div>
                <strong>{p.name}</strong>
                <div className="price">${p.price}</div>
                <div className="desc">{p.description}</div>
              </div>
              <div className="actions">
                <button onClick={() => onDelete(p.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
