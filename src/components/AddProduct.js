
/*const AddProduct = ({
    handleNewProductNameChange, 
    handleNewCategoryNameChange, 
    handleNewStockCountChange,
    newProductResult,
    addNewProduct,
    newProductName,
    newCategoryName,
    newStockCount,
 }) => (
    <div>
    <h2>Add New User</h2>
    <form>
    <div className="input-area">
    <label>
    Product Name
    <input className="new-user-form-input" onChange={handleNewProductNameChange}  value={newProductName}  type="text"/>
    </label>
    </div>
    <div className="input-area">
    <label>
    Category Name
    <input className="new-user-form-input" onChange={handleNewCategoryNameChange} value={newCategoryName}  type="text"/>
    </label>
    </div>
    <div className="input-area">
    <label>
    Name
    <input className="new-user-form-input" onChange={handleNewStockCountChange} value={newStockCount}  type="number"/>
    </label>
    </div>
    </form>
    <button className="button" onClick={addNewProduct}>Add</button>
    {
        newProductResult === "success" && (
            <div>
            <h2>Yeni Ürün Başarıyla Eklendi!</h2>
            </div>
            )
        }
        {
            newProductResult === "failure" && (
                <div>
                <h2>Ürün eklenemedi!</h2>
                </div>
                )
            }
            </div>
            )
            
            export default AddProduct;*/
import React from "react";
import useNewItem from "../common/hooks"
            
const AddProduct = ({newProductResult, addNewProduct}) => {
    
    const [element, categoryName, productName, inventoryNumber] = useNewItem({title: "Kategori Adı", options: ["Kırtasiye", "Teknik", "Diğer"]} ,"Ürün İsmi", "Eklenecek Stok Sayısı")
    console.log(categoryName)
    const handleClick = () => {
        addNewProduct(productName, categoryName, inventoryNumber)
      }

    return(
        <> 
            {
                element()
            }   
            <button className="button" onClick={handleClick}>Add</button>
            {
                newProductResult === "success" && <h2>Yeni Ürün Başarıyla Eklendi!</h2>
            }
            {
                newProductResult === "failure" && <h2>Ürün eklenemedi!</h2>
            }
        </>
    )
}

export default AddProduct;