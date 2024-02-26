import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductUpdateForm( {onProductUpdate}) {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });
  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/${productId}`, product);
      alert('Product updated successfully');
      onProductUpdate();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input type="text" value={productId} onChange={handleProductIdChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default ProductUpdateForm;
