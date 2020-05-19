import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Talebiniz Başarıyla Oluşturuldu</h1>
      <label>Talep Edilen Ürün İsmi</label>
      <h3>{state.selectedData.productName}</h3>
      <label>Talep Edilen Ürün Kategorisi</label>
      <h3>{state.selectedData.categoryName}</h3>
      <label>Talep Edilen Ürün Sayısı</label>
      <h3>{state.requestedNumber}</h3>
      <Link to="/customer">
        <button>Müşteri Sayfasına Dön</button>
      </Link>
      <Link to="/">
        <button>Çıkış Yap</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
