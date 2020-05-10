import React, {useEffect, useState} from "react";
import {useLocation, Link} from 'react-router-dom';


const RequestPage = () => {

    const location = useLocation()
    const {state} = location
    console.log(state.productName)

    return(
        <div>
            <h1>Request Submit Page</h1>
            <label>Ürün İsmi</label>
            <h3>{state.productName}</h3>
            <label>Ürün Kategorisi</label>
            <h3>{state.categoryName}</h3>
            <label>Stok Sayısı</label>
            <h3>{state.inventoryNumber}</h3>
            <label>Talep Edilen Sayı</label>
            <h3>{state.requestedNumber}</h3>
            <Link to="/customer" ><button>Geri Dön</button></Link>
            <Link to={{
                pathname: "/request",
                state: state
                 }}>
                    <button >Düzelt</button>
            </Link>
            <button >Onayla</button>
            
        </div>
    )
}


export default RequestPage;