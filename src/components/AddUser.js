import React, { useState } from 'react';

import useForm from '../common/hooks';
import Notification from './Notification';

const AddUser = ({ addNewUser, newUserResult }) => {
  const [showError, setShowError] = useState(false);

  const labels = {
    dropdown: 'Kullanıcı Tipi',
    firstInput: 'Kullanıcı Adı',
    secondInput: 'Şifre',
    thirdInput: 'Ad',
    fourthInput: 'Soyad',
    fifthInput: 'Email',
  };

  const defaultStates = {
    dropdown: 'customer',
  };

  const options = ['admin', 'customer'];

  const [userForm, inputStates] = useForm(labels, options, defaultStates);

  const [
    comboboxValue,
    usernameInputValue,
    passwordInputValue,
    nameInputValue,
    surnameInputValue,
    emailInputValue,
  ] = inputStates;
  console.log(comboboxValue);

  const handleClick = () => {
    if (
      usernameInputValue.length &&
      passwordInputValue.length &&
      nameInputValue.length &&
      surnameInputValue.length &&
      emailInputValue
    ) {
      addNewUser(
        comboboxValue,
        usernameInputValue,
        passwordInputValue,
        nameInputValue,
        surnameInputValue,
        emailInputValue
      );
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {userForm()}
      {/*can not use as < UserForm /> due to problem of re-rendering */}
      {showError && (
        <Notification notificationText="* işaretli alanlar gereklidir" />
      )}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {newUserResult === 'success' && (
        <h2>Yeni kullanıcı başarıyla eklendi!</h2>
      )}
      {newUserResult === 'failure' && <h2>Kullanıcı eklenemedi!</h2>}
    </>
  );
};

export default AddUser;
