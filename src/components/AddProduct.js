import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import useForm from '../common/hooks';
import Notification from './Notification';

const AddProduct = ({ newProductResult, addNewProduct, closeNotification }) => {
  const [showError, setShowError] = useState(false);

  const labels = {
    dropdown: 'Kategori Adı',
    firstInput: 'Ürün İsmi',
    secondInput: 'Eklenecek Stok Sayısı',
  };

  const defaultStates = {
    dropdown: 'Teknik',
  };

  const options = ['Kırtasiye', 'Teknik', 'Diğer'];

  const [productForm, inputStates] = useForm(labels, options, defaultStates);
  const [comboboxValue, productName, inventoryNumber] = inputStates;

  const handleClick = () => {
    if (inventoryNumber.length && productName.length) {
      addNewProduct(comboboxValue, productName, inventoryNumber);
    } else {
      setShowError(true);
    }
  };

  //snackbar disappears due to twice rendering problem
  return (
    <>
      <div class="form">
        {productForm()}
        {/*can not use as < ProductFrom /> due to problem of re-rendering */}
        {showError && (
          <Notification notificationText="* işaretli alanlar gereklidir" />
        )}
        <button className="button" onClick={handleClick}>
          Add
        </button>
      </div>
      <Snackbar
        open={newProductResult === 'success'}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message="Yeni ürün başarıyla eklendi"
        key={('top', 'center')}
        onClose={closeNotification}
      />
    </>
  );
};

export default AddProduct;
