import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import useForm from '../common/hooks';
import Notification from './Notification';

const AddUser = ({ addNewUser, newUserResult, closeNotification }) => {
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
    dropdown: 'Müşteri',
  };

  const options = ['Yönetici', 'Müşteri'];

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
      <div class="form">
        {userForm()}
        {/*can not use as < UserForm /> due to problem of re-rendering */}
        {showError && (
          <Notification notificationText="* işaretli alanlar gereklidir" />
        )}
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
      <Snackbar
        open={newUserResult === 'success'}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message="Yeni kullanıcı başarıyla eklendi"
        key={('top', 'center')}
        onClose={closeNotification}
      />
    </>
  );
};

export default AddUser;
