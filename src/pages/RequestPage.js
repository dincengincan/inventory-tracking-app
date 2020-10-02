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
        <label>Product Name</label>
        <h4>{state.selectedData.productName}</h4>
        <label>Product Category</label>
        <h4>{state.selectedData.categoryName}</h4>
        <label>Amount Of Stock</label>
        <h4>{state.selectedData.inventoryNumber}</h4>

        <label>
          Requested Amount
          <div>
            <TextField
              style={{ margin: '20px 0' }}
              id="standard-basic"
              value={requestedNumber}
              onChange={handleInputChange}
              placeholder="Type a Number"
            />
          </div>
        </label>
        {showError && (
          <h4 style={{ color: 'red' }}>
            There isn't enough of this item! Please type again
          </h4>
        )}
      </div>
      <button class="button stepper" onClick={handleRequestClick}>
        Submit
      </button>
      <Link to="/customer">
        <button class="button stepper">Cancel</button>
      </Link>
    </FormLayout>
  );
};

export default RequestPage;
