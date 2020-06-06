import React, { useState } from 'react';

import useForm from '../common/hooks';
import Notification from './Notification';

import ModalMui from './ModalMui';

const UserModal = ({ closeModal, customerId, formData, getUsersData }) => {
  const [showError, setShowError] = useState(false);

  const selectedData = formData.users.find((user) => {
    return user.customerId === customerId;
  });

  const labels = {
    dropdown: 'Kullanıcı Tipi',
    firstInput: 'Kullanıcı Adı',
    secondInput: 'Şifre',
    thirdInput: 'Ad',
    fourthInput: 'Soyad',
    fifthInput: 'Email',
  };

  const defaultStates = {
    dropdown: selectedData.userType,
    firstInput: selectedData.username,
    secondInput: selectedData.password,
    thirdInput: selectedData.name,
    fourthInput: selectedData.surname,
    fifthInput: selectedData.email,
  };

  const options = ['admin', 'user'];

  const [userForm, inputStates] = useForm(labels, options, defaultStates);
  const [
    comboboxValue,
    usernameInputValue,
    passwordInputValue,
    nameInputValue,
    surnameInputValue,
    emailInputValue,
  ] = inputStates;

  const updateUser = async () => {
    if (
      !usernameInputValue.length ||
      !passwordInputValue.length ||
      !nameInputValue.length ||
      !surnameInputValue.length ||
      !emailInputValue
    ) {
      setShowError(true);
      return;
    }

    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        userType: comboboxValue,
        name: nameInputValue,
        surname: surnameInputValue,
        username: usernameInputValue,
        password: passwordInputValue,
        email: emailInputValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://5e9b1cde10bf9c0016dd1b23.mockapi.io/musteri/${customerId}`,
        settings
      );
      const data = await fetchResponse.json();
      if (data) {
        closeModal();
        getUsersData();
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log('usermodal');
  return (
    <ModalMui>
      {userForm()}
      {showError && (
        <Notification notificationText="* işaretli alanlar gereklidir" />
      )}
      <button className="button modal" onClick={updateUser}>
        Kaydet
      </button>
      <button className="button modal" onClick={closeModal}>
        Kapat
      </button>
    </ModalMui>
  );
};

export default UserModal;
