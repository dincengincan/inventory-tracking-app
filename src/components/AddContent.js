import React from "react";


const AddUser = ({
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
    loginData
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
      </form>
        <button className="button" onClick={addNewUser}>Add</button>
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

export default AddUser;