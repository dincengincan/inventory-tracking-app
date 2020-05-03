import React from 'react';


const User = ({item, handleClickDelete, handleClickModal}) => {
    
    return ( 
        <div>
            <li className="list-item">{`${item.name} ----------> ${item.surname} ----------> ${item.userType} ----------> ${item.username} ----------> ${item.password} ----------> ${item.email}`}
                <button onClick={() => handleClickModal(item.customerId)} className="button list">Düzenle</button>
                <button onClick={() => handleClickDelete(item.customerId)} className="button list">Sil</button>
            </li>
        </div>
    )
}
    
export default User;