import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onProductAdded }) {
    const [productId, setProductId] = useState('');
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/products', formData)
      .then(response => {
        console.log('New product added:', response.data);
        onProductAdded();
        setFormData({
          _id: '',
          name: '',
          price: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('Error adding new product:', error);
      });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input type="text" name="_id" value={formData._id} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
