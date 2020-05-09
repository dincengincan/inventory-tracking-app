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


  const labels = {
    dropdown: "Kullanıcı Tipi",
    firstInput: "Kullanıcı Adı",
    secondInput: "Şifre",
    thirdInput: "Ad",
    fourthInput: "Soyad",
    fifthInput: "Email"
  }

  const defaultStates = {
    dropdown: selectedData.userType,
    firstInput: selectedData.username,
    secondInput: selectedData.password,
    thirdInput: selectedData.name,
    fourthInput: selectedData.surname,
    fifthInput: selectedData.email
  }

  const options = ["admin", "user"]
  
  const [UserForm, inputStates] = useForm( labels, options, defaultStates)
  const [comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue] = inputStates;
  
  const updateUser = async (customerId) => {
      console.log(customerId)
      const settings = {
        method: "PUT",
        body: JSON.stringify({
          userType: comboboxValue,
          name: nameInputValue,
          surname: surnameInputValue,
          username: usernameInputValue,
          password: passwordInputValue,
          email: emailInputValue,
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
        <UserForm />
        <button className="button" onClick={() => updateUser(customerId)} >Kaydet</button>
        <button className="button list" onClick={closeModal}>Kapat</button>
      </StyledFormContainer>
    </StyledModalContainer>, modalRoot
    )
}
    
export default Modal;