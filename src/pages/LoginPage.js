import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import FormLayout from '../components/FormLayout';

import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const LoginPage = () => {
  const [username, setUsername] = useState('ecdinc');
  const [password, setPassword] = useState('12345');
  const [dropdownValue, setDropdownValue] = useState('Yönetici');
  const [loginData, setLoginData] = useState({});
  const [result, setResult] = useState('');

  const history = useHistory();

  const classes = useStyles();

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

  const handleLogin = (e) => {
    e.preventDefault();

    const selectedUserObject = loginData.users.find((item) => {
      return item.username === username;
    });

    if (selectedUserObject) {
      const isUserCorrect =
        selectedUserObject.password === password &&
        selectedUserObject.userType === dropdownValue;
      if (dropdownValue === 'Yönetici' && isUserCorrect) {
        setResult('success');
        history.push('/admin');
        return;
      }
      if (dropdownValue === 'Müşteri' && isUserCorrect) {
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
    <FormLayout width={300}>
      <h2>LOGIN</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            style={{ margin: '20px 0' }}
            id="standard-select-usertype"
            select
            label="Kullanıcı Tipi"
            value={dropdownValue}
            onChange={handleDropdownChange}
          >
            <MenuItem value="Müşteri">Müşteri</MenuItem>
            <MenuItem value="Yönetici">Yönetici</MenuItem>
          </TextField>
        </div>
        <div>
          <TextField
            style={{ margin: '20px 0' }}
            id="standard-basic"
            label="Kullanıcı Adı"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <TextField
            style={{ margin: '20px 0' }}
            id="standard-basic"
            label="Şifre"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </form>
      <button onClick={handleLogin} class="button button-login">
        Giriş Yap
      </button>

      {result === 'success' && (
        <div>
          <h3>Giriş Başarılı! Yönlendiriliyorsunuz...</h3>
        </div>
      )}
      {result === 'failure' && (
        <div>
          <h3>Hatalı Kullanıcı Adı veya Şifre!</h3>
        </div>
      )}
    </FormLayout>
  );
};

export default LoginPage;
