import React from 'react';


const Product = ({item, deleteProduct, handleClickModal}) => {
    return ( 
        <div>
            <li className="list-item">{`${item.productName} ----------> ${item.categoryName} ----------> ${item.inventoryNumber}`}
                <button onClick = {() => handleClickModal(item.productId)} className="button list">Düzenle</button>
                <button  onClick = {() => deleteProduct(item.productId)} className="button list">Sil</button>
                
                
            </li>
        </div>
    )
}
    
export default Product;