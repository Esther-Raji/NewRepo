import React, { useState } from 'react'
import './Header.css'
import { RxDropdownMenu } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom'
import img from '../assets/lacurve.jpeg'
import { FaBagShopping } from 'react-icons/fa6'
import { logout } from '../Global/Redux-store/slice';
import { useDispatch, useSelector } from 'react-redux'
import DropDown from '../Pages/DropDown'

const Header = () => {
    const nav = useNavigate()
  const {cart} = useSelector((state)=>state)
    const [dropDown, setDropDown] = useState(false)
  return (
    <div className='HeaderBody'>
        <aside>
            <img src={img} alt="" />
            <h3 style={{color:"white"}}>La_Curve</h3>
        </aside>
        <nav>
            <div><NavLink to='/vendors' style={({isActive})=>isActive? {color: "green"}: {color:"white"}}>Vendors</NavLink></div>
            <div><NavLink to='/cart' style={({isActive})=>isActive? {color: "green"}: {color:"white"}}>Cart {cart.length}</NavLink></div>
            {/* <div><NavLink to='/product' style={({isActive})=>isActive? {color: "green"}: {color:"white"}}>Menu</NavLink></div> */}
        </nav>
        <article>
    <div><FaBagShopping/></div>
    <button 
            onClick={()=> dispatch(logout())}
            style={{height:'35px', width:"100px", alignSelf:"center", background:"transparent",borderRadius:"10px",fontSize:'14px'}}
            ><NavLink to = '/login'>Log out</NavLink></button>        </article>
        <div className='burger'>
     {
        dropDown?   <RxDropdownMenu style={{
            color:"white",
            fontSize:"40px"
        }}  onClick={()=>setDropDown(false)}/>:   <RxDropdownMenu style={{
            color:"white",
            fontSize:"30px"
        }}  onClick={()=>setDropDown(true)}/>
     }
        </div>

     {
        dropDown?   <DropDown/>:null
     }

    </div>
  )
}

export default Header