import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import '../App.css';

const LoginPage = () => {
  const [username, setUsername] = useState('ecdinc');
  const [password, setPassword] = useState('12345');
  const [dropdownValue, setDropdownValue] = useState('admin');
  const [loginData, setLoginData] = useState({});
  const [result, setResult] = useState('');

  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri'
      );
      const data = await response.json();
      const users = data.map((user) => user);
      setLoginData({
        users: users,
      });
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedUserObject = loginData.users.find((item) => {
      return item.username === username;
    });

    if (selectedUserObject) {
      const isUserCorrect =
        selectedUserObject.password === password &&
        selectedUserObject.userType === dropdownValue;
      if (dropdownValue === 'admin' && isUserCorrect) {
        setResult('success');
        history.push('/admin');
        return;
      }
      if (dropdownValue === 'customer' && isUserCorrect) {
        setResult('success');
        history.push({
          pathname: '/customer',
          state: { userInfo: selectedUserObject },
        });
        return;
      }
    }
    setResult('failure');
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-area">
          <label htmlFor="username-field">User Name</label>
          <input
            className="input"
            onChange={handleUsernameChange}
            value={username}
            name="username-field"
            type="text"
          />
        </div>
        <div className="input-area">
          <label htmlFor="password-field">Password</label>
          <input
            className="input"
            onChange={handlePasswordChange}
            value={password}
            name="password-field"
            type="password"
          />
        </div>
        <div className="input-area">
          <label>User Type</label>
          <select
            className="input"
            value={dropdownValue}
            onChange={handleDropdownChange}
          >
            <option value="customer">Müşteri</option>
            <option value="admin">Yönetici</option>
          </select>
        </div>
        <button className="button">Login</button>

        {result === 'success' && (
          <div>
            <h2>Giriş Başarılı! Yönlendiriliyorsunuz...</h2>
          </div>
        )}
        {result === 'failure' && (
          <div>
            <h2>Hatalı Kullanıcı Adı veya Şifre!</h2>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
