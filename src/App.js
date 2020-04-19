import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [result, setResult] = useState("");
  const [newUserResult, setNewUserResult] = useState("");
  const [loginData, setLoginData] = useState({})

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleNewUsernameChange = (e) => {
    setNewUsername(e.target.value);
  }

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    

    const isUsernameCorrect =  loginData.users.some(item => {
      return item.username === username 
    })

    const isPasswordCorrect =  loginData.users.some(item => {
      return item.password === password 
    })

    if(isPasswordCorrect && isUsernameCorrect) {
      setResult("success");
    }
    else{
      setResult("failure");
    }
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


  useEffect(() => console.log(loginData))
  
console.log(loginData)

const elements = () => {
  
}

  return (
    <div className="App">
      <h1>Stock Tracking App</h1>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username-field">User Name</label>
          <input onChange={handleUsernameChange}  value={username} name="username-field" type="name"/>
        </div>
        <div>
          <label htmlFor="password-field">Password</label>
          <input onChange={handlePasswordChange} value={password} name="password-field" type="name"/>
        </div>
        <button onClick={handleClick}>Login</button>

        {
          result === "success" && (
          <div>
          <h2>Giriş Başarılı!</h2>
          <h3>{`username is: ${username}`}</h3>
          <h3>{`password is: ${password}`}</h3>
          </div>
          )
        }
        {
          result === "failure" && (
          <div>
          <h2>Hatalı Kullanıcı Adı veya Şifre!</h2>
          </div>
          )
        }
        
      </form>
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
  );
}

export default App;
