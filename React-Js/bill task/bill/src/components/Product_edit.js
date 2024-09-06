import React from 'react'

export default function Product_edit() {
   const [productName , setProductName] =usestate()
   const [productPrice , setProductPrice] =usestate()
   const [productImage , setProductImage] =usestate()
    

  return (
  <>
     <form >
        <label>productName :</label>
        <input/>
        <label>productPrice :</label>
        <input/>
        <label>productImage :</label>
        <input/>
     </form>
  </>
  );

}
