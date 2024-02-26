import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductDelete from './ProductDelete';
import ProductUpdate from './ProductUpdate';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const handleProductAdded = () => {
    fetchProducts();
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>{product._id} - {product.name} - ${product.price} - {product.description}</li>
        ))}
      </ul>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductDelete onDeleteSuccess={handleProductAdded}/>
      <ProductUpdate onProductUpdate ={handleProductAdded}/>
    </div>
  );
}

export default App;
