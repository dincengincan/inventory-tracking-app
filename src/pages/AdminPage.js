import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import AddUser from "../components/AddContent"
import UsersList from "../components/UsersList"
import Modal from "../components/Modal"


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
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newName, setNewName] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newUserResult, setNewUserResult] = useState("");
    const [loginData, setLoginData] = useState({});
    const [showPortal, setShowPortal] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState("");


    const handleClickModal = (customerId) => {
      setSelectedCustomerId(customerId)  
      setShowPortal(true)
    }

    const closeModal = () => {
      console.log("close modal")
      setShowPortal(false);
    }
    
    
    const handleNewNameChange = (e) => {
      setNewName(e.target.value);
    }

    const handleNewSurnameChange = (e) => {
      setNewSurname(e.target.value);
    }
    
    const handleNewEmailChange = (e) => {
      setNewEmail(e.target.value);
    }

    const handleNewUsernameChange = (e) => {
      setNewUsername(e.target.value);
      }
      
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
      }

    const handleUserContent = () => setShowContent("user")
    const handleProductContent = () => setShowContent("product")

    const addNewUser = async () => {
      const settings = {
          method: "POST",
          body: JSON.stringify({
            name: newName,
            surname: newSurname,
            username: newUsername,
            password: newPassword,
            email: newEmail,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      try {
          const fetchResponse = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri", settings);
          const data = await fetchResponse.json();
          if(data){
            getData();
            setNewUserResult("success")
          }
        }
      catch(e) {
          console.log(e);
        }
    }
    

      const getData = async () => {
        const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
        const data = await response.json();
        const users = data.map(user => user)
        setLoginData({
          users : users,
        })
      }

      useEffect(() => {
        const getData = async () => {
          const response = await fetch("https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri");
          const data = await response.json();
          const users = data.map(user => user)
          setLoginData({
            users : users,
          })
        }
        getData();
      },[])
    
      const deleteUser = async (customerId) => {
        const settings = {
          method: "DELETE"
        }
        try {
          const fetchResponse = await fetch(`https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri/${customerId}`, settings);
          const data = await fetchResponse.json();
          if(data){
            getData();
          }
        }
        catch(e) {
          console.log(e);
        }
      }

    
      const userContent = () => (
            <>
            <AddUser 
            newUsername={newUsername}
            newPassword={newPassword}
            newName={newName}
            newSurname={newSurname}
            newEmail={newEmail}
            handleNewUsernameChange = {handleNewUsernameChange}
            handleNewPasswordChange = {handleNewPasswordChange}
            handleNewNameChange = {handleNewNameChange}
            handleNewSurnameChange= {handleNewSurnameChange}
            handleNewEmailChange= {handleNewEmailChange}
            newUserResult = {newUserResult}
            addNewUser = {addNewUser}
            loginData = {loginData}
            
            />
            <UsersList handleClickDelete={deleteUser} loginData = {loginData} handleClickModal={handleClickModal} />
            </>
      )

    const productContent = () => (
        <div>
        Product Content
        </div>
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
            showPortal && <Modal data={loginData} customerId= {selectedCustomerId} closeModal={closeModal} getData={getData} />
            }
        </div>
    )
}

export default AdminPage;