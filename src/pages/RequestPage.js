import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

const RequestPage = () => {
  const location = useLocation();
  const { state } = location;

  const [requestedNumber, setRequestedNumber] = useState(
    state.requestedNumber || ''
  );
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  const handleRequestClick = () => {
    if (Number(requestedNumber) > Number(state.selectedData.inventoryNumber)) {
      setShowError(true);
    } else {
      history.push({
        pathname: '/request-submit',
        state: { ...state, requestedNumber: requestedNumber },
      });
    }
  };

  const handleInputChange = (e) => {
    setShowError(false);
    setRequestedNumber(e.target.value);
  };

  return (
    <div>
      <h1>Request Page</h1>
      <label>Ürün İsmi</label>
      <h3>{state.selectedData.productName}</h3>
      <label>Ürün Kategorisi</label>
      <h3>{state.selectedData.categoryName}</h3>
      <label>Stok Sayısı</label>
      <h3>{state.selectedData.inventoryNumber}</h3>
      {showError && (
        <h3 style={{ color: 'red' }}>Stokta yeterli ürün bulunmuyor.</h3>
      )}
      <label>
        Talep Edilen Sayı
        <input
          type="number"
          placeholder="Lütfen adet giriniz"
          value={requestedNumber}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleRequestClick}>Ekle</button>
      <Link to="/customer">
        <button>Vazgeç</button>
      </Link>
    </div>
  );
};

export default RequestPage;
