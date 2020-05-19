import React from 'react';
import useForm from '../common/hooks';

const AddProduct = ({ newProductResult, addNewProduct }) => {
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
    addNewProduct(comboboxValue, productName, inventoryNumber);
  };

  return (
    <>
      {productForm()}
      {/*can not use as < ProductFrom /> due to problem of re-rendering */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {newProductResult === 'success' && <h2>Yeni Ürün Başarıyla Eklendi!</h2>}
      {newProductResult === 'failure' && <h2>Ürün eklenemedi!</h2>}
    </>
  );
};

export default AddProduct;
