import React from 'react';

import useForm from "../common/hooks"

import Modal from "./Modal"

const UserModal = ({closeModal, customerId, formData, getUsersData}) => {
  const selectedData = formData.users.find(user => {
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
  
  const [userForm, inputStates] = useForm( labels, options, defaultStates)
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
          closeModal();
          getUsersData();
        }
      }
      catch(e) {
        console.log(e);
      }
  }
console.log("usermodal")
  return (
    <Modal>
        {userForm()}
        <button className="button" onClick={() => updateUser(customerId)} >Kaydet</button>
        <button className="button list" onClick={closeModal}>Kapat</button>
    </Modal>
    )
}
    
export default UserModal;