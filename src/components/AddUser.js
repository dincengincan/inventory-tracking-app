import React , {useState} from "react";


/*const AddUser = ({
    handleNewUsernameChange, 
    handleNewPasswordChange, 
    handleNewNameChange,
    handleNewSurnameChange,
    handleNewEmailChange,
    newUsername,
    newPassword,
    newUserResult,
    addNewUser,
    newName,
    newSurname,
    newEmail,
 }) => (
    <div>
    <h2>Add New User</h2>
      <form>
        <div className="input-area">
          <label>
            User Name
            <input className="new-user-form-input" onChange={handleNewUsernameChange}  value={newUsername}  type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Password
            <input className="new-user-form-input" onChange={handleNewPasswordChange} value={newPassword}  type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Name
            <input className="new-user-form-input" onChange={handleNewNameChange} value={newName}  type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Surname
            <input className="new-user-form-input" onChange={handleNewSurnameChange} value={newSurname}  type="text"/>
          </label>
        </div>
        <div className="input-area">
          <label>
            Email
            <input className="new-user-form-input" onChange={handleNewEmailChange} value={newEmail}  type="email"/>
          </label>
        </div>
        <button className="button" onClick={addNewUser}>Add</button>
      </form>
        {
          newUserResult === "success" && (
          <div>
          <h2>Yeni Kullanıcı Başarıyla Eklendi!</h2>
          </div>
          )
        }
        {
          newUserResult === "failure" && (
          <div>
          <h2>Kullanıcı eklenemedi!</h2>
          </div>
          )
        }
        
        </div>
)

export default AddUser;*/

import useNewItem from "../common/hooks"

const AddUser = ({addNewUser, newUserResult}) => {
  const [element, comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue] = useNewItem({title: "Kullanıcı Tipi", options: ["admin", "user"]}, "Username", "Password", "Name", "Surname", "Email")
    console.log(comboboxValue)
  const handleClick = () => {
    addNewUser(comboboxValue, usernameInputValue, passwordInputValue, nameInputValue, surnameInputValue, emailInputValue)
  }

  return(
    <> 
        {
            element()
        }   
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