import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://your-backend-api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default AllProductsPage;
