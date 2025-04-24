import React, {  useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const Login = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState]= useState("Sign up");
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""

    })

    const onChangeHandler = (event)=>{
      const name =event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin =async(event)=>{
        event.preventDefault()
        let newUrl =url;
        if (currState==="Login") {
          newUrl=newUrl+"/api/user/login"
        }
        else{
          newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
        }
        else{
          alert(response.data.message)
        }
    }

  return (
    <div className='login'>
       <form onSubmit={onLogin} className='login-con'>
            <div className='login-title'>
                <h2>{currState}</h2>
                 <img onClick={()=>setShowLogin(false)} src ={assets.cross_icon}></img>
            </div>
            <div className='login-inputs'>
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='your-name' required/>}
            
             
            <input name='email' onChange={onChangeHandler} value={data.email} type ="email" placeholder='email-id' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required/>
            <button type='submit'>{currState==="Sign Up"?"please create your account":"Login"}</button>
            
            <div className='login-cond'>
              <input type='checkbox' required/>
              <p>i agree to the terms and condition</p>
            </div>
            {currState==="Login"
            ?<p>create a new account? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
            :<p>already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
                
            </div>
        </form>
    </div>
  )
}

export default Login;