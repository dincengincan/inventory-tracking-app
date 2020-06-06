import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import FormLayout from '../components/FormLayout';

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
    } else if (!requestedNumber.length) {
      return;
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
    <FormLayout>
      <div class="request-form">
        <label>Ürün İsmi</label>
        <h4>{state.selectedData.productName}</h4>
        <label>Ürün Kategorisi</label>
        <h4>{state.selectedData.categoryName}</h4>
        <label>Stok Sayısı</label>
        <h4>{state.selectedData.inventoryNumber}</h4>

        <label>
          Talep Edilen Sayı
          <div>
            <TextField
              style={{ margin: '20px 0' }}
              id="standard-basic"
              value={requestedNumber}
              onChange={handleInputChange}
              placeholder="Sayı giriniz"
            />
          </div>
        </label>
        {showError && (
          <h4 style={{ color: 'red' }}>
            Stokta yeterli ürün bulunmuyor. Lütfen tekrar giriniz
          </h4>
        )}
      </div>
      <button class="button stepper" onClick={handleRequestClick}>
        Onayla
      </button>
      <Link to="/customer">
        <button class="button stepper">Vazgeç</button>
      </Link>
    </FormLayout>
  );
};

export default RequestPage;
