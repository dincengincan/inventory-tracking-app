import React from "react";

const AddUser = ({
    handleNewUsernameChange, 
    handleNewPasswordChange, 
    newUsername,
    newPassword,
    newUserResult,
    addNewUser,
    loginData
 }) => (
    <div>
    <h2>Add New User</h2>
      <form>
        <div>
          <label htmlFor="new-username-field">User Name</label>
          <input onChange={handleNewUsernameChange}  value={newUsername} name="username-field" type="name"/>
        </div>
        <div>
          <label htmlFor="new-password-field">Password</label>
          <input onChange={handleNewPasswordChange} value={newPassword} name="password-field" type="name"/>
        </div>
      </form>
        <button onClick={addNewUser}>Add</button>
        {
          newUserResult === "success" && (
          <div>
          <h2>Yeni Kullanıcı Başarıyla Eklendi!</h2>
          <h3>{`Kullanıcı Adı: ${newUsername}`}</h3>
          <h3>{`Şifre: ${newPassword}`}</h3>
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
        <h2>Mevcut Kullanıcılar (Toplam {loginData.users && loginData.users.length} adet)</h2>
        <ul>
            { loginData.users && (
            loginData.users.map(item => {
              return (
                <div key={item.id}>
              <li className="list-item">{`${item.username} ----------> ${item.password}`}
              <button className="button">Düzenle</button>
              <button className="button">Sil</button>
              </li>
              </div>
              )
            }))
            }
        </ul>
        </div>
)

export default AddUser;