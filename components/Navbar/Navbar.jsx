import React,{ useState } from "react";
import './Navbar.css'
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Navbar =({setShowLogin}) => {

     const [menu,setMenu] = useState("menu");
    const {getTotalCartAmount,token,setToken} =useContext(StoreContext);
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
     
    return (
        <div className="navbar">
            <img src={assets.siu} className="logo"></img>
                <ul className="navbar-menu">
                    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
                    <a href="#exploremenu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                    <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                    <a href="#footer" onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>    
                </ul>
        
                <div className="navbar-right">
                    <img src={assets.search_icon}/>
                    <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon}/></Link>
                      <div className= {getTotalCartAmount()===0?"":"dot"}/></div>
                
                  {!token? <button onClick={()=>setShowLogin(true)}>Sign in</button>
                  :<div className="navbar-profile">
                    <img src={assets.profile_icon} alt=""></img>
                    <ul className="nav-prof">
                    <li><img src={assets.bag_icon} /><p>orders</p></li>
                        <hr/>
                    <li onClick={logout}><img src={assets.logout_icon}/><p>logout</p></li>
                    </ul>
                </div> }
            </div>
            </div>
        
    )
}

export default Navbar;