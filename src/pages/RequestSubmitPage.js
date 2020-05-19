import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

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
    <div>
      <h1>Request Submit Page</h1>
      <label>Ürün İsmi</label>
      <h3>{state.selectedData.productName}</h3>
      <label>Ürün Kategorisi</label>
      <h3>{state.selectedData.categoryName}</h3>
      <label>Stok Sayısı</label>
      <h3>{state.selectedData.inventoryNumber}</h3>
      <label>Talep Edilen Sayı</label>
      <h3>{state.requestedNumber}</h3>
      <Link to="/customer">
        <button>Geri Dön</button>
      </Link>
      <Link
        to={{
          pathname: '/request',
          state: state,
        }}
      >
        <button>Düzelt</button>
      </Link>
      <button onClick={handleClick}>Onayla</button>
    </div>
  );
};

export default RequestSubmitPage;
