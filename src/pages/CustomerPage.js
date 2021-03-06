import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ProductsListCustomer from '../components/ProductsListCustomer';
import FormLayout from '../components/FormLayout';

const CustomerPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  const [productsData, setProductsData] = useState({});

  const handleRequestClick = (productId) => {
    console.log(productsData);
    const selectedData = productsData.products.find((product) => {
      return product.productId === productId;
    });
    history.push({ pathname: '/request', state: { ...state, selectedData } });
  };

  useEffect(() => {
    const getProductsData = async () => {
      const response = await fetch(
        'https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory'
      );
      const data = await response.json();
      const products = data.map((product) => product);
      setProductsData({
        products: products,
      });
    };
    getProductsData();
  }, []);

  return (
    <FormLayout>
      <h2>Customer Paneli</h2>
      <ProductsListCustomer
        handleRequestClick={handleRequestClick}
        productsData={productsData}
      />
    </FormLayout>
  );
};

export default CustomerPage;
