// import React from 'react'


// export default function Cart({cart}) {
//   return (
//     <>
//      <div className='card-parent'>
//       {
//         cart.cart.length === 0 ?
//     <div>this is for rendering in cart</div>
//     :
//     cart.cart.map((info) =>{
//     return(
        
//         <div className="fashioncart" key={info.id}>
       
//           <div className="image_part">
//             <img alt='imagepart' className="image_fashion" src={`${info.images}`} />
//           </div>
//           <div className="content_part">
//             <span className="clothes"> {info.fashion}</span>
//             <div className="fashion">
           
//               <button className="addtocart" onClick={()=>cart.addToCart(info)}>{info.add}</button>
//             </div>
//             <div className="details">
//             <div className="description">{info.description}</div>
//             <div className="price">{info.price}</div>
//             <div className="stock">{info.Totalquantity}</div>
//             <button className="removefromcart"> {info.remove}</button> 
          
//             </div>
//           </div>
//         </div>
//           )
//         })
//       }
//       </div>
//     </>
//   )
// }


import React,{useState} from 'react'
// import "../card.css"
import './cart.css'
export default function Cart({ cart }) {
  return (
    <>
     {
        cart.cart.length == 0 ?
        <div className='cart-container'>
            no product in cart.
          </div>
          :
          cart.cart.map((info) => {
            return (
              <div className='cart-container'>
                <div className='container'>
                  <img src={info.images} />
                </div>
                <div className='product-detail'>
                  <div>Price</div>
                  <div> Rs.{info.price}</div>
                </div>
                <div className='quantity-container'>
                  <div>Quantity</div>
                  <button onClick={()=>cart.addToCart(info) }>+</button>
                  <div>Pcs {info.quantity}</div>
                  <button onClick={()=>cart.deleteToCart(info)}>-</button>
                </div>
                <div className='delete'>
                  <button onClick={()=>cart.removeCart(info)}>Delete from Cart</button>
                </div>
                <div className='total'>
                  <div>Total Price</div>
                  <div>{info.price * info.quantity} </div>
                  </div>
              </div>
            )
          })
          }
</>
  )
}