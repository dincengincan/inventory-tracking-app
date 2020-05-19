import React from 'react';

import Product from './Product';

const ProductsList = ({ productsData, deleteProduct, handleClickModal }) => {
  console.log(productsData);
  return (
    <div>
      <h2>
        Mevcut Ürünler (Toplam{' '}
        {productsData.products && productsData.products.length} adet)
      </h2>
      <ul>
        {productsData.products &&
          productsData.products.map((item) => (
            <Product
              key={item.productId}
              item={item}
              deleteProduct={deleteProduct}
              handleClickModal={handleClickModal}
            />
          ))}
      </ul>
    </div>
  );
};

export default ProductsList;
