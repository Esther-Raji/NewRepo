import React, { useEffect, useState } from 'react'
import { MainBody, Wrapper,SignUpFrom, TextHeader, Input,Button,FormText,
InputPasswordDiv, PassInfo, Select} from '../Pages/AuthStyle'
import {toast, Toaster} from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {signUp} from '../Global/Redux-store/slice'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
// import { signUp } from '../../Global/Redux-store/slice';

const SignUp = () => {
  const Nav = useNavigate()
  const dispatch = useDispatch()
  const [Loading, setLoading] = useState()
//  const [showPassword, setShowPassword] = useState(true)

 const User = z.object({
    email:z.string().email({message: "must be a valid email"}),
    name:z.string(),
    role:z.string(),
    password:z.string({message: 'must be a string'})
    .min(5, {message: 'must be more than 5 characters'})
    // .regex( /^(?=.\d)(?=.[!@#$%^&])[a-zA-Z\d!@#$%^&]{8,}$/, {message:'wrong format'})
   })

 const {register, handleSubmit, formState: {errors}, setErrors} = useForm({
  resolver:zodResolver(User),
 })

 const onSubmit = (data)=>{
  dispatch(signUp( data))
  Nav('/login')

  // console.log("success" , data)
 }

//  const MyshowPassword = ()=> {
//     setShowPassword(false)
//  }

//  const [formData, setFormData] = useState({})
//  console.log(formData)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const signUpAction=(e)=>{
//         // e.preventDefault();
//         dispatch(signUp(formData));
//         navigate("/")
//     }

  return (
    <MainBody>
        <Wrapper>
            <SignUpFrom  onSubmit={handleSubmit(onSubmit)}>
                <TextHeader>
                  <h3>Sign Up</h3>
                </TextHeader> 
                <Input type='text' placeholder='username' bd hg wd br bg required={true} {
                  ...register('name') }/>
                  {/* {errors.name && <span style={{color:"red", background:"white"}}>{errors.name.message}</span>} */}
                <Input type='email' placeholder='email' bd  hg wd br bg  required={true} {
                  ...register('email')
                }/>
                {errors.email && <span style={{color:"red", background:"white"}}>{errors.email.message}</span>}
                <InputPasswordDiv>
                <Input type='password' placeholder='password' required={true} { ...register('password') }/>
                {errors.password && <span style={{color:"red", background:"white"}}>{errors.password.message}</span>}
                </InputPasswordDiv>
                <Select {...register('role')}>
                  <option value=''>--vendor/buyer--</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Buyer">Buyer</option>
                </Select>
                <Button Bg type='submit'>
                  {
                    Loading?"Loading...":"Sign Up"
                  }
                </Button>
                  <FormText>Already have an Account <span onClick={()=> Nav("/login")}> SignIn</span></FormText>
            </SignUpFrom>
        </Wrapper>
      <Toaster/>
    </MainBody>
  )
}

export default SignUp