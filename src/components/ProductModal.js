import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components'

import useForm from "../common/hooks"

const modalRoot = document.getElementById("modal-root")

const StyledModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.5);
color: #FFF;
`

const StyledFormContainer = styled.form`
background-color: black; 
height: 400px;
width: 400px;
margin: auto;
text-align: center;
padding-top: 50px;
margin-top: 50px;
`

const ProductModal = ({closeModal, productId, formData, getProductsData}) => {
    console.log("productModal")
    const selectedData = formData.products.find(product => {
    return product.productId === productId;
  })
  console.log(selectedData)


  const labels = {
    dropdown: "Kategori Adı",
    firstInput: "Ürün İsmi",
    secondInput: "Eklenecek Stok Sayısı",
  }

  const defaultStates = {
    dropdown: selectedData.categoryName,
    firstInput: selectedData.productName,
    secondInput: selectedData.inventoryNumber,
  }

  const options = ["Kırtasiye", "Teknik", "Diğer"]
  
  const [productForm, inputStates] = useForm( labels, options, defaultStates)
  const [comboboxValue, productNameValue, inventoryNumberValue] = inputStates;
  
  const updateUser = async (customerId) => {
      console.log(customerId)
      const settings = {
        method: "PUT",
        body: JSON.stringify({
          categoryName: comboboxValue,
          productName: productNameValue,
          inventoryNumber: inventoryNumberValue,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
      try {
        const fetchResponse = await fetch(`https://5e9b1cde10bf9c0016dd1b23.mockapi.io/inventory/${productId}`, settings);
        const data = await fetchResponse.json();
        if(data){
          closeModal();
          getProductsData();
        }
      }
      catch(e) {
        console.log(e);
      }
  }

  return createPortal(
    <StyledModalContainer>
      <StyledFormContainer>
        {productForm()}
        <button className="button" onClick={() => updateUser(productId)} >Kaydet</button>
        <button className="button list" onClick={closeModal}>Kapat</button>
      </StyledFormContainer>
    </StyledModalContainer>, modalRoot
    )
}
    
export default ProductModal;