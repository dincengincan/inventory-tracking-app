import React, {useEffect, useState} from "react";
import {useLocation, useHistory, Link} from 'react-router-dom';


const RequestPage = () => {
    const location = useLocation()
    const {state} = location

    const [requestedNumber, setRequestedNumber] = useState(state.requestedNumber || "")


    const history = useHistory();
    
    const handleRequestClick = () => {
        history.push({pathname: "/request-submit", state: {...state, requestedNumber: requestedNumber }})
    }

    const handleInputChange = (e) => setRequestedNumber(e.target.value)

    return(
        <div>
            <h1>Request Page</h1>
            <label>Ürün İsmi</label>
            <h3>{state.productName}</h3>
            <label>Ürün Kategorisi</label>
            <h3>{state.categoryName}</h3>
            <label>Stok Sayısı</label>
            <h3>{state.inventoryNumber}</h3>
            <label>Talep Edilen Sayı
                <input type="number" placeholder="Lütfen adet giriniz" value={requestedNumber} onChange={handleInputChange}/>
            </label>
            <button onClick={handleRequestClick}>Ekle</button>
            <Link to="/customer" ><button>Vazgeç</button></Link>
            
        </div>
    )
}


export default RequestPage;