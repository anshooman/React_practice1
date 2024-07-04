import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js"


function App() {
  const [productList, setProductList] = useState([
    {
      price: 99999,
      name: "Iphone 15",
      rating: 4.5,
      quantity: 0,
    },
    {
      price: 34999,
      name: "Xiomi 11 Pro",
      rating: 4.1,
      quantity: 0,
    },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount; // Define newTotalAmount here
    if(newProductList[index].quantity > 0)
      {
        newProductList[index].quantity--;
        newTotalAmount -= newProductList[index].price;
      }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>

      <Footer
      
      totalAmount={totalAmount}
      
      />
    </>
  );
}

export default App;