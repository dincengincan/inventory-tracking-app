import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import AddUser from "../components/AddUser"
import UsersList from "../components/UsersList"
import Modal from "../components/Modal"
import AddProduct from "../components/AddProduct"
import ProductsList from "../components/ProductsList"


const StyledContentButton = styled.button`
  margin-top:20px;
  padding:5px 10px;
  background-color: ${({selectedContent}) => selectedContent ? "rgb(155, 83, 101)" : "rgb(105, 83, 101)"} ;
  border:none;
  color: rgb(209, 209, 209);
  cursor:pointer;
  outline: none;
  padding: 10px 20px;

  :hover{
    background-color: rgb(17, 9, 15);
  }
`

const AdminPage = () => {
    const [showContent, setShowContent] = useState("")
    const [newUserResult, setNewUserResult] = useState("");
    const [newProductResult, setNewProductResult] = useState("");
    const [loginUserData, setUserLoginData] = useState({});
    const [productsData, setProductsData] = useState({});
    const [showPortal, setShowPortal] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState("");
    

    const handleClickModal = (customerId) => {
      setSelectedCustomerId(customerId)  
      setShowPortal(true)
    }

    const closeModal = () => {
      setShowPortal(false);
    }

    const handleUserContent = () => setShowContent("user")
    const handleProductContent = () => setShowContent("product")

    const addNewUser = async (comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue) => {
      const settings = {
          method: "POST",
          body: JSON.stringify({
            name: nameInputValue,
            surname: surnameInputValue,
            username: usernameInputValue,
            password: passwordInputValue,
            userType: comboboxValue,
            email: emailInputValue,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      try {
          const fetchResponse = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri", settings);
          const data = await fetchResponse.json();
          if(data){
            getUserData();
            setNewUserResult("success");
          }
        }
      catch(e) {
          console.log(e);
        }
    }

    const addNewProduct = async (comboboxValue, productName, inventoryNumber) => {
      const settings = {
          method: "POST",
          body: JSON.stringify({
            productName: productName,
            categoryName: comboboxValue,
            inventoryNumber: inventoryNumber,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      try {
          const fetchResponse = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory", settings);
          const data = await fetchResponse.json();
          if(data){
            getProductsData();
            setNewProductResult("success");
          }
        }
      catch(e) {
          console.log(e);
        }
    }
    

      const getUserData = async () => {
        const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
        const data = await response.json();
        const users = data.map(user => user)
        setUserLoginData({
          users : users,
        })
      }

      const getProductsData = async () => {
        const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory");
        const data = await response.json();
        const products = data.map(product => product)
        setProductsData({
          products : products,
        })
      }

      useEffect(() => {
        const getUserData = async () => {
          const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
          const data = await response.json();
          const users = data.map(user => user)
          setUserLoginData({
            users : users,
          })
        }
        getUserData();
      },[])

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
    
      const deleteUser = async (customerId) => {
        const settings = {
          method: "DELETE"
        }
        try {
          const fetchResponse = await fetch(`https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri/${customerId}`, settings);
          const data = await fetchResponse.json();
          if(data){
            getUserData();
          }
        }
        catch(e) {
          console.log(e);
        }
      }

    
      const userContent = () => (
            <>
            <AddUser addNewUser = {addNewUser} newUserResult = {newUserResult} />
            <UsersList handleClickDelete={deleteUser} loginUserData = {loginUserData} handleClickModal={handleClickModal} />
            </>
      )

    const productContent = () => (
      <>
      <AddProduct addNewProduct= {addNewProduct} newProductResult = {newProductResult} />
      <ProductsList handleClickDelete={deleteUser} productsData = {productsData} handleClickModal={handleClickModal} />
      </>
    )

    console.log(showContent === "user" ? true : false)
    return(
        <div>
          <h1>Admin Page</h1>
          <StyledContentButton selectedContent={showContent === "user"} onClick={handleUserContent} >User Panel</StyledContentButton>
          <StyledContentButton selectedContent={showContent === "product"} onClick={handleProductContent}>Product Panel</StyledContentButton>
            {
              showContent === "user" && userContent()
            }
            {
              showContent === "product" && productContent()
            }
            {
            showPortal && <Modal data={loginUserData} customerId= {selectedCustomerId} closeModal={closeModal} getUserData={getUserData} />
            }
        </div>
    )
}

export default AdminPage;