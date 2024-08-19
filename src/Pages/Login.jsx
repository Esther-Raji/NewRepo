
import React, { useEffect, useState } from 'react'
import { MainBody, Wrapper, SignUpFrom, TextHeader, Input,Button,FormText,
InputPasswordDiv, PassInfo} from '../Pages/AuthStyle'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {buyerLogin} from '../Global/Redux-store/slice'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
// import { MdAttachEmail } from 'react-icons/md';

const Login = () => {
    const [Loading, setLoading] = useState(false)
    // const [formData, setFormData]= useState({});
   const Nav = useNavigate()
   const dispatch = useDispatch();
   const User = z.object({
    email:z.string().email({message: "must be a valid email"}),
    // name:z.string(),
    // role:z.string(),
    password:z.string({message: 'must be a string'})
    // .min(5, {message: 'must be more than 5 characters'})
    // .regex( /^(?=.\d)(?=.[!@#$%^&])[a-zA-Z\d!@#$%^&]{8,}$/, {message:'wrong format'})
   })

 const {register, handleSubmit, formState: {errors}, setErrors} = useForm({
  resolver:zodResolver(User),
 })

   const onSubmit = (data)=>{
    dispatch(buyerLogin(data))
    console.log(data)
    Nav('/')
   }
//    const navigate = useNavigate();
//    const isLoggedIn= useSelector((state)=> state.isLoggedIn)

//    const loginAction=(e)=>{
//        e.preventDefault();
//        dispatch(login(formData));
//        console.log(isLoggedIn)
//    }

//    useEffect(()=>{
//        if(isLoggedIn === true){
//            navigate("/home");
//            console.log(isLoggedIn)
//        }
//    },[isLoggedIn])
   
  


  
     return (
       <MainBody>
           <Wrapper>
               <SignUpFrom onSubmit={handleSubmit(onSubmit)}>
                   <TextHeader>
                     <h3>Login</h3>
                   </TextHeader> 
                   <Input type='email' placeholder='Email' hg wd br bg    required={true} {  ...register('email') }/>
                {errors.email && <span style={{color:"red", background:"white"}}>{errors.email.message}</span>}
                <InputPasswordDiv>
                <Input type='password' placeholder='password' required={true} { ...register('password') }/>
                   {errors.password && <span style={{color:"red", background:"white"}}>{errors.password.message}</span>}
                </InputPasswordDiv>           
                   <Button Bg type='submit'>
                    {
                      Loading? "Loading...":"Login"
                    }
                     </Button>
                     <FormText hv>Forgot password?</FormText>
                     <FormText>Do not have an Account <span onClick={()=> Nav("/signup")}> SignUp</span></FormText>
               </SignUpFrom>
           </Wrapper>
           
           
         
           
         {/* <Toaster/> */}
       </MainBody>
     )
}

export default Login