import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DropDown = () => {
    const nav = useNavigate();
  return (

    <MainBody>
       <Nav>
       <ul>
            <li onClick={()=>nav('/vendors')}>Vendors</li>
            <li onClick={()=>nav('/cart')}>Cart</li>
            <li onClick={()=>nav('/menu')}>Menu</li>
        </ul>
       </Nav>
        <Button onClick={()=>nav('/signup')}> Sign Up</Button>

    </MainBody>
  )
}

export default DropDown;

export const MainBody = styled.div`
height:34vh;
width:130px;
background:aliceblue;
position:absolute;
display:flex;
align-items:center;
flex-direction:column;
padding:10px 25px ;
top:100%;
right:10px;
border-top:1px solid gray;
justify-content:space-between;
z-index:999999;


`
export const Nav = styled.div`
width:100%;
height:70%;
display:flex;
flex-direction:column;


ul{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    li{
        list-style:none;
        font-size:12px;
        // font-weight:500;
        cursor:pointer;
        transition:all 350ms ease-in-out;

        &:hover{
    color:blue;
 text-decoration:blue underline; 
}
    }
}

`

export const Button = styled.button`
height:20px;
width:90px;
background:green;
border-radius:10px;
border:none;
color:white;
font-size:10px;
cursor:pointer;
transition:all 350ms ease-in-out;



&:hover{
    background: rgb(26, 26, 161);
}
`
