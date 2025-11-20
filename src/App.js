import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) setProducts(JSON.parse(stored));
    else {
      const sample = [
        { id: 1, name: 'Sample Product', price: 9.99, description: 'A sample product' }
      ];
      setProducts(sample);
      localStorage.setItem('products', JSON.stringify(sample));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts(prev => [{ ...product, id: Date.now() }, ...prev]);
  };

  const fetchFromAPI = async (id = 1) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = res.data;
      console.log('fetched product', data);
      const product = {
        id: Date.now(),
        name: data.title || data.name || 'API Product',
        price: data.price || 0,
        description: data.description || '',
        image: data.image || data.imageUrl || ''
      };
      setProducts(prev => [product, ...prev]);
    } catch (err) {
      console.error('Fetch error', err);
      const msg = err.response?.statusText || err.message || 'Unknown error';
      alert('Failed to fetch product: ' + msg);
    }
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Elite Dashboard</h1>
        <div className="header-actions">
          <button onClick={() => fetchFromAPI(1)} className="fetch-btn">Load Product from API</button>
        </div>
      </header>
      <main>
        <section className="left">
          <AddProduct onAdd={addProduct} />
        </section>
        <section className="right">
          <ProductList products={products} onDelete={deleteProduct} />
        </section>
      </main>
    </div>
  );
}

export default App;
