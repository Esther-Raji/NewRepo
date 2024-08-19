import React from 'react'
import './Layout.css'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MyPage from '../Pages/MyPage'


const Layout = () => {

  const {isLoggedIn} = useSelector((state)=>state.loginInfo)
  console.log(isLoggedIn)
  return (
   <>
   {
   isLoggedIn  ? <div className='LayoutBody'>
   <div className="LayoutContainer">
   <MyPage/>
      <Outlet/>
   </div>
    </div>:<Navigate to = '/login' replace = {true}/>
    }
   </>
  )
}

export default Layout