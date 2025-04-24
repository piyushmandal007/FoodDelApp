import React, { useContext,useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';


 const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url} =useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    locality:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""

  })
  const onChangeHandler = (event) =>{
    const name =event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  
    const placeOrder= async (event)=>{
        event.preventdefault();
        let orderItems = [];
        food_list.map((item)=>{
          if(cartItems[item.id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item.id];
            orderItems.push(itemInfo)
          }

        })

        let orderData = {
          address:data,
          items:orderItems,
          amount: getTotalCartAmount()+25,

        }
        let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
        if (response.data.success) {
          const {session_url}= response.data;
          window.location.replace(session_url);
          
        }
        else{
          alert("error");
        }
    }
  }
 
  return (
    <form onSubmit={PlaceOrder} className='placeorder'>
       <div className='placeorderleft'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='first-name'></input>
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='last-name'></input>
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='email address'></input>
          <input required name='locality' onChange={onChangeHandler} value={data.locality} type='text' placeholder='Locality'></input>
          <div className='multi-fields'>
            <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City'></input>
            <input name='state' onChange={onChangeHandler} value={data.state}type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
            <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zipcode'></input>
            <input name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country'></input>
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type='number' placeholder='Phone'/>
       </div>
       
       <div className='placeorderright'>
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
            
            <button type='submit'>PAY HERE</button>
          </div>
       </div>
       </form>
  
  )
}

export default PlaceOrder