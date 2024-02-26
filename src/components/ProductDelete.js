import React, { useState } from 'react';
import axios from 'axios';

const ProductDeleteButton = ({ onDeleteSuccess, onDeleteError }) => {
  const [productId, setProductId] = useState('');

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/products/${productId}`)
      .then(response => {
        onDeleteSuccess(); // Callback to handle successful deletion
        setProductId(''); // Reset input after successful deletion
      })
      .catch(error => {
        onDeleteError(error); // Callback to handle deletion error
      });
  };

  const handleChange = (event) => {
    setProductId(event.target.value);
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={handleChange} />
      </label>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDeleteButton;
