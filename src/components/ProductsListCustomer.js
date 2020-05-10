import React from 'react';

import ProductCustomer from "./ProductCustomer"

const ProductsListCustomer = ({productsData, handleRequestClick }) => {
    console.log(productsData)
    return(
        <div>
            <h2>Mevcut Ürünler (Toplam {productsData.products && productsData.products.length} adet)</h2>
            <ul>
                {  
                    productsData.products && ( productsData.products.map(item =><ProductCustomer key={item.productId} item={item}  handleRequestClick= {handleRequestClick}  />) )
                }
            </ul>
        </div>

    )
}

export default ProductsListCustomer;