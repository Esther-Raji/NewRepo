import React, { useEffect, useState } from 'react'
import './Vendors.css'
import data from '../JsFiles/CatData'
import { useNavigate } from 'react-router-dom'


const Product = () => {

    const Nav = useNavigate()
    const [menuArray, setMenuArray] = useState([])
    // console.log(CatArray)
  
    useEffect(()=>{
      const holdArray = data.map((e)=>e.vendorName)
      const catchCats = holdArray.reduce((a,e,)=>{
        if(a.length === 0){
          a.push(e);
          return a
        }else if(a.includes(e)){
          return a
        }else{
          a.push(e)
          return a
        }
      }, [])
     setMenuArray(catchCats)
  
    },[])
  

  return (
    <div className='Vendor'>
        <h2>Meet Our Top Vendors</h2>
        <div className='VendorcardHolder'>
       {
        menuArray.map((e)=>(
            <div className='VendorCard' onClick={()=>Nav(`/product/:${e}`)}>
            <div className="VendorimgHolder" >
                {/* <img src={e.image} alt="" /> */}
            </div>
            <div className="VendorText">
                <p>{e}</p>
            </div>
                </div>
        ))
       }

        </div>

    </div>
  )
}

export default Product