import { useState } from "react";
import "./ExpenseInput.css";

function ExpenseInput({ onCreate }) {
  const [productID, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  const handleIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSellingPrice(e.target.value);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(productID, sellingPrice, productName);
    setProductId("");
    setSellingPrice("");
    setProductName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product ID:</label>
        <input
          className="productID"
          onChange={handleIdChange}
          value={productID}
        ></input>
        <label>Selling Price:</label>
        <input
          type="number"
          className="price"
          onChange={handlePriceChange}
          value={sellingPrice}
        ></input>
        <label>Product Name:</label>
        <input
          className="productName"
          onChange={handleNameChange}
          value={productName}
        ></input>
        <button className="btn">Add Products</button>
      </form>
    </div>
  );
}

export default ExpenseInput;
