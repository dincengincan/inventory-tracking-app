import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

import ProductsListCustomer from "../components/ProductsListCustomer"

const CustomerPage = () => {
    const history = useHistory()
    const [productsData, setProductsData] = useState({});

    const handleRequestClick = (productId) => {
        console.log(productsData)
        const selectedData = productsData.products.find(product => {
            return product.productId === productId;
          })
        history.push({pathname: "/request", state: selectedData})
    }

    useEffect(() => {
        const getProductsData = async () => {
          const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory");
          const data = await response.json();
          const products = data.map(product => product)
          setProductsData({
            products : products,
          })
        }
        getProductsData();
      },[])


    return(
        <div>
            <h1>Customer Page</h1>
            <ProductsListCustomer handleRequestClick = {handleRequestClick} productsData={productsData} />
            
        </div>
    )
}


export default CustomerPage;