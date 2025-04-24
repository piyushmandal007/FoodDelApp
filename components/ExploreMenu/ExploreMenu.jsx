import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='exploremenu' id='exploremenu'>
      <h1>Explore our menu</h1>
       <p className='exploremenutext'>All you need is love. But a little chocolate now and then doesn’t hurt.</p>
       <div className='exploremenulist'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploremenulist-item'>
                    <img className={(category===item.menu_name? "active":"")}src={item.menu_image} alt=''></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
       </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu