import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import AddUser from "../components/AddUser"
import UsersList from "../components/UsersList"
import UserModal from "../components/UserModal"
import ProductModal from "../components/ProductModal"
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
    const [usersData, setUsersData] = useState({});
    const [productsData, setProductsData] = useState({});
    const [notifications, setNotifications] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState("");
    const [selectedProductId, setSelectedProductId] = useState("");
    

    const handleClickUserModal = (customerId) => {
      setSelectedCustomerId(customerId)  
      setShowUserModal(true)
    }

    const handleClickProductModal = (productId) => {
      setSelectedProductId(productId)  
      setShowProductModal(true)
    }

    const closeUserModal = () => {
      setShowUserModal(false);
    }

    const closeProductModal = () => {
      setShowProductModal(false);
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
            getUsersData();
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
    

      const getUsersData = async () => {
        const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
        const data = await response.json();
        const users = data.map(user => user)
        setUsersData({
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
        const getUsersData = async () => {
          const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
          const data = await response.json();
          const users = data.map(user => user)
          setUsersData({
            users : users,
          })
        }
        getUsersData();
      },[])

      useEffect(() => {
        const getNotifications = async () => {
          try {
            const fetchResponse = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/orders");
            const data = await fetchResponse.json();
            if(data){
              setNotifications(data)
            }
          }
          catch(e) {
            console.log(e);
          }
      }
      getNotifications()
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
            getUsersData();
          }
        }
        catch(e) {
          console.log(e);
        }
      }

      const deleteProduct = async (productId) => {
        const settings = {
          method: "DELETE"
        }
        try {
          const fetchResponse = await fetch(`https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory/${productId}`, settings);
          const data = await fetchResponse.json();
          if(data){
            getProductsData();
          }
        }
        catch(e) {
          console.log(e);
        }
      }

    
      const UserPanel = () => (
            <>
            <AddUser addNewUser = {addNewUser} newUserResult = {newUserResult} />
            <UsersList deleteUser={deleteUser} loginUserData = {usersData} handleClickModal={handleClickUserModal} />
            </>
      )

    const ProductPanel = () => (
      <>
      <AddProduct addNewProduct= {addNewProduct} newProductResult = {newProductResult} />
      <ProductsList deleteProduct={deleteProduct} productsData = {productsData} handleClickModal={handleClickProductModal} />
      </>
    )

    return(
        <div>
          <h1>Admin Page</h1>
          <StyledContentButton selectedContent={showContent === "user"} onClick={handleUserContent} >User Panel</StyledContentButton>
          <StyledContentButton selectedContent={showContent === "product"} onClick={handleProductContent}>Product Panel</StyledContentButton>
            {
              showContent === "user" && <UserPanel />
            }
            
            {
              showContent === "product" &&  <ProductPanel />
            }
            {
              showProductModal && <ProductModal formData={productsData} productId= {selectedProductId} closeModal={closeProductModal} getProductsData={getProductsData} />
            }
            {
              showUserModal && <UserModal formData={usersData} customerId= {selectedCustomerId} closeModal={closeUserModal} getUsersData={getUsersData} />
            }
            <h2>Bildirimler</h2>
            <ul>
              {
                notifications.map(notification => {
                return(
                <li><b>{`${notification.orderOwner.user.name} ${notification.orderOwner.user.surname} 
                ${notification.createdAt}`}</b> tarihinde <b>{`${notification.orderNumber}`}</b> adet <b>{`${notification.orderName}`}</b> talep etti.</li>
                )
                })
              }
            </ul>
        </div>
    )
}

export default AdminPage;