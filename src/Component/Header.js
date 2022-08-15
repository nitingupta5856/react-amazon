import React from "react";
import{Link} from "react-router-dom"
function Header({setInputState}) {
  console.log(setInputState);
  function manageInput(e){
    let {value}=e.target;
    setInputState.setInputState(value)
  }
    return (
      <div className="header">
       
        <Link to="/"> <img className="header__logo" src="/images/download.png" alt="amazon" /></Link>
        <div className="searchbar" >
          <input className="searchicon" placeholder="Search Your Product" onChange={manageInput}/>
          <img className="searchimg" src="/images/OIP.jpg" alt="search" />
          
          
        </div>
  
        <div className="header__nav">
          <div className="header__option">
          
          <Link to="/Signup"><span className="header__optionLineTwo">Sign UP</span></Link>
           
            
          </div>
  
          <div className="header__option">
          <Link to="/Login"><span className="header__optionLineTwo"> LogIn</span></Link>
          {/* <span className="header__optionLineTwo"> LogIn</span> */}
          
            
            
          </div>

          
          <Link to="/cartpage"><div className="header__basketCount" style={{textDecoration:"none"}}>cart </div></Link>
          <div className="cart_class">{setInputState.cart.length}</div>
  
  
          {/* <img
            src="/images/cart.png"
            className="header__basketCount"
            alt="cart"
          /> */}
        </div>
      </div>
    );
  }
  export default Header;
  