import React, { useContext, useEffect, useState } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
const MyOrders = () => {
    //  const {url,token} = useContext(StoreContext);
     const[data,setData] = useState([]);


    // const fetchOrders= async()=>{
    //     const response = await axios.post(url+"/api/order/userOrders",{},{headers:{token}});
    //     setData(response.data.data);
    //     console.log(response.data.data);
    // }

    // useEffect(()=>{
    //     if (token) {
    //         fetchOrders();
    //     }
    // },[token])
  return (
    <div className='my-orders'>
        <h2>my orders</h2>
        <div className='con'>
            {data.map((order,index)=>{
                return (
                    <div key={index} className='=my-orders-con'>
                        <img src ={assets.parcel_icon} alt = ""/>
                        <p>{order.items.map((item,index)=>{
                            if(index=== order.items.length-1){
                                return item.name+"x"+item.quantity

                            }
                        })}

                        </p>


                    </div>
                )
            })}
        </div>
    </div>
        
            
  )
}

export default MyOrders