import React from 'react'


export default function Pantcomp({object}) {
  return (
    <div className='card-parent'>
      {
        object.pantdata.map((info) =>{
          return(
        
        <div className="fashioncart">
          <div className="image_part">
            <img alt='imagepart' className="image_fashion" src={`${info.images}`} />
          </div>
          <div className="content_part">
            <span className="clothes"> {info.fashion}</span>
            <div className="fashion">
              <button className="addtocart" onClick={()=>object.addToCart(info)}> {info.add}</button>
            </div>
            <div className="details">
            <div className="description">{info.description}</div>
            <div className="price">{info.price}</div>
            <div className="stock">{info.Totalquantity}</div>
            <button className="removefromcart"> {info.remove}</button> 
            {/* <button>add to cart</button> */}
            </div>
          </div>
        </div>
          )
        })
  
   }
   </div>
  )
};
