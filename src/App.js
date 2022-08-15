import './App.css';
import { useState } from 'react';
import Header from './Component/Header';
import Subheader from './Component/Subheader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Card from './Component/Card';

import Shirt from './Component/Shirt';
import Pant from './Component/Pant';
import Cart from './Component/cartpage/Cart';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  let [inputState, setInputState] = useState('');
  // step :1 => for add to cart
  const [cart, setCart] = useState([]); 
  // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    console.log("clicked on cart",product);
   
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((info) => info.id === product.id);
    // for empty cart array this find method will not work.

    if (productinCart) {
      // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
      // setCart(cart.map((info) => info.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : info))
      if (productinCart.quantity < productinCart.totalquantity) {

        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        setCart(cart.map((info) => info.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : info))
      }
    }
    else {
      // spread opertor
      
      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function deleteToCart(product){
    const productinCarttoDelete = cart.find((info)=> info.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(info => {return info.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((info)=> info.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: info ))
    }
  }
  function removeCart(product){
    setCart(cart.filter(info=>info.id!=product.id))
  }
  return (
    <div className="App">
     

      <BrowserRouter>
        <Header setInputState={{setInputState,cart}}/>
      <Subheader/> 
       {/* so that header and subheader are constant on each page */}
      <Routes>
      <Route path="/Login" element={<Login />}/>
         <Route path="/Signup" element={<Signup />}/>
         
        <Route path="/" element={<Card inputState={{inputState, addToCart}} />}/>
        
        <Route path="/Card" element={<Card />}/>
        <Route path="/cartpage" element={<Cart cart={{cart,addToCart,deleteToCart,removeCart}} />}/>
          {/* please make a shirts component */}
        <Route path="/Shirt" element={<Shirt  addToCart={addToCart}/>}/>  
          {/* please make a pant component */} 
        <Route path="/Pant" element={<Pant addToCart={addToCart}/>}/>   
         
      </Routes>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
