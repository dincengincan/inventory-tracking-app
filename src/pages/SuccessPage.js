import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import FormLayout from '../components/FormLayout';

const SuccessPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <FormLayout>
      <h2>Your request has been given succesfully!</h2>
      <div class="request-form">
        <label>Requested Product Name</label>
        <h4>{state.selectedData.productName}</h4>
        <label>Requested Product Category</label>
        <h4>{state.selectedData.categoryName}</h4>
        <label>Requested Product Amount</label>
        <h4>{state.requestedNumber}</h4>
      </div>
      <Link to="/customer">
        <button class="button stepper">Go Back to Customer Page</button>
      </Link>
      <Link to="/">
        <button class="button stepper">Log out</button>
      </Link>
    </FormLayout>
  );
};

export default SuccessPage;
