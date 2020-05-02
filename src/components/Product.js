import React from 'react';


const Product = ({item}) => {
    console.log(item)
    return ( 
        <div>
            <li className="list-item">{`${item.productName} ----------> ${item.categoryName} ----------> ${item.inventoryNumber}`}
                <button  className="button list">Düzenle</button>
                <button  className="button list">Sil</button>
            </li>
        </div>
    )
}
    
export default Product;