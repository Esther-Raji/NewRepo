import React, { useEffect, useState } from 'react'
import './Product.css'
import { addToCart } from '../Global/Redux-store/slice';
import data from '../JsFiles/CatData'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'


const Product = () => {
    const dispatch= useDispatch() 
    
    const [menuArray, SetMenuArray] = useState([])
    const {menuName} = useParams()

    useEffect(()=>{
      const menuItems = data.filter((e)=>  ":"+ e.vendorName === menuName)
      console.log(menuItems)
      SetMenuArray(menuItems)
     },[menuName])
    
    return (
    <div className='product'>
        <h2>Check Out Our Mouth Wateringand Craving Satisfying Menu</h2>
        <div className='ProductcardHolder'>
       {
        menuArray.map((e)=>(
            <div className='ProductCard'>
            <div className="productimgHolder">
                <img src={e.image} alt="" />
            </div>
            <div className="productText">
                <p>{e.name}</p>
                <p>#{e.price}</p>
            </div>
            <div className='Button'>
            <button onClick={(()=>dispatch(addToCart(e)))}>Add to Cart</button>
            <button>Order Now</button>
            </div>
                </div>
        ))
       }

        </div>

    </div>
  )
}

export default Product