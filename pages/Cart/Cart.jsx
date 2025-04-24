import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import {Link, useNavigate } from 'react-router-dom';


const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const  navigate = useNavigate();
  return (
 
    <div className='cart'>
      <div className='cart-items'>
      <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br/>
      <hr/>
      {food_list.map((item,index)=>{
        if(cartItems[item.id]>0)
        {
          return(
            <div>
            <div className='cart-items-piyush'>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <p>{cartItems[item.id]}</p>
            <p>₹{item.price*cartItems[item.id]}</p>
            <p onClick={()=>removeFromCart(item.id)}>x</p>
            </div>
            <hr/>
            </div>
          )
        }
      }
      
      )}

         

      </div>
        <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>CART TOTAL</h2>
          
          <div className='cart-tot-det'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-tot-det'>
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0?0:25}</p>
            </div>
            <hr/>
            <div className='cart-tot-det'>
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+25}</b>
              </div>
            
            <button onClick={()=>navigate('/placeorder')}>proceed to checkout</button>
          </div>
          <div className='promo-code'>
            <div>
              <p>enter code</p>
              <div className='promo-code-input'>
              <input type='text' placeholder="Piyush's offer code" />
              <button>submit</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Cart