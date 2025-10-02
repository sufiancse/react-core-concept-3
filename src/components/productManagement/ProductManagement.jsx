import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleProduct = (newProduct) => {
    // setProducts([...products, data]);
    setProducts(p => [...p, newProduct])
  };
  console.log(products);
  return (
    <div>
      <ProductForm handleProduct={handleProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
