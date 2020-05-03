import React from "react";

import useForm from "../common/hooks"

const AddUser = ({addNewUser, newUserResult}) => {
  const labels = {
    dropdown: "Kullanıcı Tipi",
    firstInput: "Kullanıcı Adı",
    secondInput: "Şifre",
    thirdInput: "Ad",
    fourthInput: "Soyad",
    fifthInput: "Email"
  }

  const defaultStates = {
    dropdown: "user"
  }

  const options = ["admin", "user"]

  
  
  const [UserForm, inputStates] = useForm( labels, options, defaultStates)

  const [comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue] = inputStates;
  

  const handleClick = () => {
    addNewUser(comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue)
  }

  return(
    <> 
        <UserForm />
        <button className="button" onClick={handleClick}>Add</button>
        {
            newUserResult === "success" && <h2>Yeni kullanıcı başarıyla eklendi!</h2>
        }
        {
            newUserResult === "failure" && <h2>Kullanıcı eklenemedi!</h2>
        }
    </>
)
}

export default AddUser;