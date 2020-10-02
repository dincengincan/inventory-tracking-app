import React, { useState } from 'react';

import useForm from '../common/hooks';
import Notification from './Notification';

import ModalMui from './ModalMui';

const ProductModal = ({ closeModal, productId, formData, getProductsData }) => {
  const [showError, setShowError] = useState(false);

  const selectedData = formData.products.find((product) => {
    return product.productId === productId;
  });

  const labels = {
    dropdown: 'Category Name',
    firstInput: 'Product Name',
    secondInput: 'Amount to be Added',
  };

  const defaultStates = {
    dropdown: selectedData.categoryName,
    firstInput: selectedData.productName,
    secondInput: selectedData.inventoryNumber,
  };

  const options = ['Stationery', 'Technical', 'Other'];

  const [productForm, inputStates] = useForm(labels, options, defaultStates);
  const [comboboxValue, productNameValue, inventoryNumberValue] = inputStates;

  const updateProduct = async () => {
    if (!productNameValue.length || !inventoryNumberValue.length) {
      setShowError(true);
      return;
    }
    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        categoryName: comboboxValue,
        productName: productNameValue,
        inventoryNumber: inventoryNumberValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory/${productId}`,
        settings
      );
      const data = await fetchResponse.json();
      if (data) {
        closeModal();
        getProductsData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ModalMui>
      {productForm()}
      {showError && <Notification notificationText="* required fields" />}
      <button className="button modal" onClick={updateProduct}>
        Kaydet
      </button>
      <button className="button modal" onClick={closeModal}>
        Kapat
      </button>
    </ModalMui>
  );
};

export default ProductModal;
