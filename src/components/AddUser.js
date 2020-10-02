import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import useForm from '../common/hooks';
import Notification from './Notification';

const AddUser = ({ addNewUser, newUserResult, closeNotification }) => {
  const [showError, setShowError] = useState(false);

  const labels = {
    dropdown: 'User Type',
    firstInput: 'User Name',
    secondInput: 'Password',
    thirdInput: 'Name',
    fourthInput: 'Surname',
    fifthInput: 'Email',
  };

  const defaultStates = {
    dropdown: 'Customer',
  };

  const options = ['Admin', 'Customer'];

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
        {showError && <Notification notificationText="* required fields" />}
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
      <Snackbar
        open={newUserResult === 'success'}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message="New User Succesfully Added"
        key={('top', 'center')}
        onClose={closeNotification}
      />
    </>
  );
};

export default AddUser;
