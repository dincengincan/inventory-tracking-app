import React from 'react';

const ProductCustomer = ({ item, handleRequestClick }) => {
  return (
    <div>
      <li className="list-item">
        {`${item.productName} ----------> ${item.categoryName} ----------> ${item.inventoryNumber}`}
        <button
          onClick={() => handleRequestClick(item.productId)}
          className="button list"
        >
          Talep Et
        </button>
      </li>
    </div>
  );
};

export default ProductCustomer;
