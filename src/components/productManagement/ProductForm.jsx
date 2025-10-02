import React, { useState } from "react";

const ProductForm = ({handleProduct}) => {
  const [error, setError] = useState("")
  const handleSubmit = e =>{
    e.preventDefault()
    const name = e.target.name.value
    const price = e.target.price.value
    const quantity = e.target.quantity.value

    if(name.length === 0){
      setError("Please Enter Product Name")
      return;
    }
    else if(price <= 0){
      setError("Please Enter Product Price")
      return
    }
    else if(quantity <= 0){
      setError("Please Set Products Quantity")
      return
    }
    else{
      setError('')
    }
    
    const products = {
      name,
      price,
      quantity
    }
    handleProduct(products)
  }
  return (
    <div>
      <h3>Add to cart</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="product name" name="name"/>
        <br />
        <input type="text" placeholder="product price" name="price"/>
        <br />
        <input type="text" placeholder="product quantity" name="quantity"/>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}>
        <small>
          {error}
        </small>
      </p>
    </div>
  );
};

export default ProductForm;
