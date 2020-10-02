import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

import FormLayout from '../components/FormLayout';

const RequestSubmitPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { state } = location;

  const makeProductRequest = async () => {
    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        inventoryNumber:
          Number(state.selectedData.inventoryNumber) -
          Number(state.requestedNumber),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory/${state.selectedData.productId}`,
        settings
      );
      const data = await fetchResponse.json();
      if (data) {
        history.push({ pathname: '/request-success', state: state });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addNewOrder = async () => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        createdAt: date,
        orderName: state.selectedData.productName,
        orderCategory: state.selectedData.categoryName,
        orderNumber: state.requestedNumber,
        orderOwner: {
          user: {
            name: state.userInfo.name,
            surname: state.userInfo.surname,
            id: state.userInfo.id,
          },
        },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(
        'https://5e9b1cde10bf9c0016dd1b23.mockapi.io/orders',
        settings
      );
      const data = await fetchResponse.json();
      if (data) {
        console.log('success');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    makeProductRequest();
    addNewOrder();
  };

  return (
    <FormLayout>
      <div class="request-form">
        <label>Product Name</label>
        <h4>{state.selectedData.productName}</h4>
        <label>Product Category</label>
        <h4>{state.selectedData.categoryName}</h4>
        <label>Amount Of Stock</label>
        <h4>{state.selectedData.inventoryNumber}</h4>
        <label>Requested Amount</label>
        <h4>{state.requestedNumber}</h4>
      </div>
      <Link
        to={{
          pathname: '/request',
          state: state,
        }}
      >
        <button class="button stepper">Edit</button>
      </Link>
      <Link to="/customer">
        <button class="button stepper">Previous Step</button>
      </Link>
      <button class="button stepper" onClick={handleClick}>
        Submit
      </button>
    </FormLayout>
  );
};

export default RequestSubmitPage;
