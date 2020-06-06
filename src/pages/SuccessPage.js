import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import FormLayout from '../components/FormLayout';

const SuccessPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <FormLayout>
      <h2>Talebiniz Başarıyla Oluşturuldu</h2>
      <div class="request-form">
        <label>Talep Edilen Ürün İsmi</label>
        <h4>{state.selectedData.productName}</h4>
        <label>Talep Edilen Ürün Kategorisi</label>
        <h4>{state.selectedData.categoryName}</h4>
        <label>Talep Edilen Ürün Sayısı</label>
        <h4>{state.requestedNumber}</h4>
      </div>
      <Link to="/customer">
        <button class="button stepper">Müşteri Paneline Dön</button>
      </Link>
      <Link to="/">
        <button class="button stepper">Çıkış Yap</button>
      </Link>
    </FormLayout>
  );
};

export default SuccessPage;
