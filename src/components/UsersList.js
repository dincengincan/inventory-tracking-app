import React from 'react';

import User from "./User"

const UsersList = ({loginUserData, handleClickDelete, handleClickModal}) => {
    return(
        <div>
            <h2>Mevcut Kullanıcılar (Toplam {loginUserData.users && loginUserData.users.length} adet)</h2>
            <ul>
                {  
                    loginUserData.users && ( loginUserData.users.map(item =><User key={item.customerId} item={item} handleClickDelete={handleClickDelete} handleClickModal={handleClickModal} />) )
                }
            </ul>
        </div>

    )
}

export default UsersList;