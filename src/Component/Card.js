//  import React,{useState} from 'react'
 import React from 'react'
import object from "./Object"
// object rendering



// let obj  = {key:value};
// let arr = [];
// object rendering => dynamic way of inserting data;
// array of object => collection of data;


// array.map => callbacks
// let arr = [1,2,3,4,5]
// arr.map((ele,idx)=>console.log(ele,idx))
// `${}`=> string value
// map=> it returns an array which is equal to original in length
// but changes occurs in value.

export default function Card({inputState}) {
  // let [obj,setObj]=useState(object)
  // console.log(inputState);
   // console.log(inputState.addToCart);
   let filteredData=object.filter(info=>info.type.includes (inputState.inputState.toLowerCase()))
  
    return (
      <>
      <div className='card-parent'>
      {
        filteredData.length===0?
        object.map((info) =>{
          return(
        
        <div className="fashioncart" key={info.id}>
        {/* <div className="fashioncart" > */}
          <div className="image_part">
            <img alt='imagepart' className="image_fashion" src={`${info.images}`} />
          </div>
          <div className="content_part">
            <span className="clothes"> {info.fashion}</span>
            <div className="fashion">
             {/* we have to put a arrow funciton in order to call a function directly in incline onclick*/}
             
              {/* <button className="addtocart"> {info.add}</button> */}
              <button className="addtocart" onClick={()=>inputState.addToCart(info)}>{info.add}</button>
            </div>
            <div className="details">
            <div className="description">{info.description}</div>
            <div className="price">{info.price}</div>
            <div className="stock">{info.totalquantity}</div>
             <button className="removefromcart"> {info.remove}</button> 
            {/* <button>add to cart</button> */}
            </div>
          </div>
        </div>
          )
        }):filteredData.map((info) => {
          return(
        
        <div className="fashioncart">
          <div className="image_part">
            <img alt='imagepart' className="image_fashion" src={`${info.images}`} />
          </div>
          <div className="content_part">
            <span className="clothes"> {info.fashion}</span>
            <div className="fashion">
              {/* <button className="addtocart"> {info.add}</button> */}
              <button className="addtocart" onClick={()=>inputState.addToCart(info)}>{info.add}</button>
            </div>
            <div className="details">
            <div className="description">{info.description}</div>
            <div className="price">{info.price}</div>
            <div className="stock">{info.totalquantity}</div>
            <button className="removefromcart"> {info.remove}</button> 
            {/* <button>add to cart</button> */}
            </div>
          </div>
        </div>
          )

        })
  
      }
   </div>
    </> 

   )
}
  
  
  