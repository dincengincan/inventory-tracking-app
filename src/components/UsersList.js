import React from 'react';

import User from "./User"

const UsersList = ({loginData, handleClickDelete, handleClickModal}) => {
    return(
        <div>
            <h2>Mevcut Kullanıcılar (Toplam {loginData.users && loginData.users.length} adet)</h2>
            <ul>
                {  
                    loginData.users && ( loginData.users.map(item =><User key={item.customerId} item={item} handleClickDelete={handleClickDelete} handleClickModal={handleClickModal} />) )
                }
            </ul>
        </div>

    )
}

export default UsersList;