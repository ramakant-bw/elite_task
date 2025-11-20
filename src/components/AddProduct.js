import React, { useState } from 'react';

export default function AddProduct({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Name required');
    const p = {
      name: name.trim(),
      price: parseFloat(price) || 0,
      description: description.trim()
    };
    onAdd(p);
    setName(''); setPrice(''); setDescription('');
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={submit}>
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Price
          <input value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          Description
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <div className="form-actions">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}
