import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {incrementQty,decrementQTY,deleteCart, clearCart} from '../Global/Redux-store/slice'
import { useDispatch } from 'react-redux'
import { RiDeleteBin6Line } from "react-icons/ri";
import Pay from './Pay'


const Cart = ({e}) => {
  const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const Nav = useNavigate()
    const{cart,total,totalQty, totalPrice, loggedInUser} = useSelector((state)=> state)

    useEffect(()=>{
      setTimeout(() => {
        setShow(false)
      }, 6000);
    })
  

  return (
    <div className='CartHolder'>
        <div className='ShoppingContainer'>
            <div className='CartHeader'>
                <h1>Total:#{total}</h1>
                <button onClick={(()=>dispatch(clearCart()))}>Clear Cart</button>
                <select name="vendor" id="vendor">                 
                   <option value=''>--vendor--</option>
                  <option value="Mama Shukura">Mama Shukura</option>
                  <option value="Vendor">Milky Maid</option>
                  <option value="Buyer">Chef Roseline</option>
                </select>
                {/* <button onClick={payKorapay}>Pay</button> */}
                <h3>Total Quantity:{totalQty}</h3>
            </div>
            <div className='CartImageHolder'>
             {
                cart?.map((e)=>(
                    <div className='cartImageDetails'>
                      <div className='ImageHolder'>  <img src={e.image} alt="" />
                      </div>
                      <div className='Details'>
                       <div className='info'> 
                       <h2>{e.name}</h2>
                       <p> Dolore illum minus esse atque, assumenda cupiditate. Provident quidem quae doloribus vero saepe.</p>
                       </div>
                       <div className='buttons'>
                        <p>#{e.price}</p>
                        <RiDeleteBin6Line style={{
                          fontSize:"25px",
                          color:"red",
                          cursor:"pointer"
                        }}
                        onClick={(()=>dispatch(deleteCart(e)))}/>
                       {/* <button onClick={(()=>dispatch(deleteCart(e)))}>Delete</button> */}
                       <div className='signs'>
                       <button onClick={(()=>dispatch(decrementQTY(e)))} >-</button>
                       <p style={{color:"black"}}> {e.QTY}</p>
                        <button  onClick={(()=>dispatch(incrementQty(e)))}>+</button>
                       </div>
                       </div>
                      

                      </div>
                    </div>
                ))
             }

            </div>
            <button onClick={()=>setShow(true)} > CheckOut{e}</button>
        </div>
        {
          show? <Pay/>:null
        }

    </div>
  )
}

export default Cart