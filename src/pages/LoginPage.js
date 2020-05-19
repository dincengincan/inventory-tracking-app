import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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
  const [dropdownValue, setDropdownValue] = useState('admin');
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
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <InputLabel id="demo-simple-select-label">Kullanıcı Tipi</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dropdownValue}
            onChange={handleDropdownChange}
          >
            <MenuItem value="customer">Müşteri</MenuItem>
            <MenuItem value="admin">Yönetici</MenuItem>
          </Select>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Kullanıcı Adı"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Şifre"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Giriş Yap
        </Button>

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
