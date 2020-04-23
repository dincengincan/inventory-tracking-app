import React, {useState, useEffect} from 'react';

import AddUser from "../components/AddUser"

const AdminPage = () => {
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newUserResult, setNewUserResult] = useState("");
    const [loginData, setLoginData] = useState({})
    
    
    
    const handleNewUsernameChange = (e) => {
        setNewUsername(e.target.value);
      }
    
      const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
      }

      const addNewUser = async () => {
        const settings = {
          method: "POST",
          body: JSON.stringify({
            username: newUsername,
            password: newPassword
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
        try {
          const fetchResponse = await fetch("https://5e9c92600fd0b50016f7474e.mockapi.io/api/v1/users", settings);
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
        const response = await fetch("https://5e9c92600fd0b50016f7474e.mockapi.io/api/v1/users");
        const data = await response.json();
        const users = data.username.map(user => user)
        setLoginData({
          users : users,
        })
      }

      useEffect(() => {
        const getData = async () => {
          const response = await fetch("https://5e9c92600fd0b50016f7474e.mockapi.io/api/v1/users");
          const data = await response.json();
          const users = data.username.map(user => user)
          setLoginData({
            users : users,
          })
        }
        getData();
      },[])
    
    
    return(
        <div>
          <h1>Admin Page</h1>
            <AddUser 
            newUsername={newUsername}
            newPassword={newPassword}
            handleNewUsernameChange = {handleNewUsernameChange}
            handleNewPasswordChange = {handleNewPasswordChange}
            newUserResult = {newUserResult}
            addNewUser = {addNewUser}
            loginData = {loginData}
            
            />
        </div>
    )
}


export default AdminPage;