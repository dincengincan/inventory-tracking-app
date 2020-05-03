import React,{useState} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components'

import useForm from "../common/hooks"

const modalRoot = document.getElementById("modal-root")


const StyledModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.5);
color: #FFF;
`

const StyledFormContainer = styled.form`
background-color: black; 
height: 400px;
width: 400px;
margin: auto;
text-align: center;
padding-top: 50px;
margin-top: 50px;
`

const Modal = ({closeModal, customerId, data, getData}) => {
  const selectedData = data.users.find(user => {
    return user.customerId === customerId;
  })

  
    
  const [newUsername, setNewUsername] = useState(selectedData.username);
  const [newPassword, setNewPassword] = useState(selectedData.password);
  const [newName, setNewName] = useState(selectedData.name);
  const [newSurname, setNewSurname] = useState(selectedData.surname);
  const [newEmail, setNewEmail] = useState(selectedData.email);
  
  

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
  
  const updateUser = async (customerId) => {
      console.log(customerId)
      const settings = {
        method: "PUT",
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
        const fetchResponse = await fetch(`https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri/${customerId}`, settings);
        const data = await fetchResponse.json();
        if(data){
          getData();
          closeModal();
        }
      }
      catch(e) {
        console.log(e);
      }
  }

  return createPortal(
    <StyledModalContainer>
      <StyledFormContainer>
        <div className="input-area">
          <label>
            User Name
            <input className="portal-form-input" value={newUsername} onChange={handleNewUsernameChange}   type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Password
            <input  className="portal-form-input" value={newPassword} onChange={handleNewPasswordChange}  type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Name 
            <input  className="portal-form-input" value={newName} onChange={handleNewNameChange}    type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Surname
            <input  className="portal-form-input"  value={newSurname} onChange={handleNewSurnameChange} type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Email
            <input className="portal-form-input" value={newEmail} onChange={handleNewEmailChange} type="email"/>
          </label>
        </div>
        <button className="button" onClick={() => updateUser(customerId)} >Kaydet</button>
        <button className="button list" onClick={closeModal}>Kapat</button>
      </StyledFormContainer>
    </StyledModalContainer>, modalRoot
    )
}
    
export default Modal;