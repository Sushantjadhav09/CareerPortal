import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useState } from 'react';
import { At  } from 'tabler-icons-react'
// import { loginUser, registerUser } from '../Services/UserServices';
import { loginValidation } from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { setJwt, setUser } from '../Slices/JwtSlice';
import { loginUser } from '../Services/AuthService';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

 const form = {
    
    email :"",
    password :""

  }

const Login = () => {
  const [data, setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  
const handleLogin = async () => {
const res = await axios.post("http://localhost:8080/auth/login");

  const token = res.data.token; 
  dispatch(setJwt(token));

  const decoded: any = jwtDecode(token);

  dispatch(setUser({
    name: decoded.name,
    sub: decoded.sub,
    accountType: decoded.accountType,
    exp: decoded.exp,
  }));
};

   const handleChange =(event:any)=>{
    console.log(event);
     setData({...data,[event.target.name]:event.target.value})
   }
   const handleSubmit=() => {
    let valid = true, newFormError:{[key:string]:string}={};
    for(let key in data){
      newFormError[key]=loginValidation(key,data[key]);
      if(newFormError[key])valid=false;
    }
    setFormError(newFormError);
    if (valid) {
  loginUser(data)
    .then((res) => {
  dispatch(setJwt(res.jwt));

  const decoded: any = jwtDecode(res.jwt);
  dispatch(setUser({
    name: decoded.name,
    sub: decoded.sub,
    accountType: decoded.accountType,
    exp: decoded.exp,
  }));

  let seconds = 4;

  const notificationId = notifications.show({
    id: 'login-redirect',
    title: 'Login Successful 🎉',
    message: `Redirecting to home page in ${seconds} seconds...`,
    color: 'green',
    withBorder: true,
    autoClose: false,
  });

  const interval = setInterval(() => {
    seconds--;

    if (seconds === 0) {
      clearInterval(interval);
      notifications.hide(notificationId);
      navigate('/');
    } else {
      notifications.update({
        id: notificationId,
        message: `Welcome ${decoded.name} ,Redirecting to home page in ${seconds} seconds...`,
      });
    }
  }, 1000);
})

    .catch((err) => {
      console.log("Login error:", err);

      const errorMessage =
        err?.response?.data?.errorMessage ||
        err?.response?.data?.message ||
        err?.message ||
        "Login failed";

      notifications.show({
        title: 'Login Failed',
        message: errorMessage,
        color: "red",
        withBorder: true,
      });
    });
}

   }
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Login Account</div>
         <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <Button onClick={handleSubmit} color="yellow" autoContrast variant="filled">Login</Button>
         <div className="mx-auto text-gray-200">Don't have an account? <Link to="/signup" className="text-amber-400 hover:underline">Sign Up</Link></div>
      
    </div>
  )
}

export default Login



// function setUser(arg0: { email: string | undefined; iss?: string; sub?: string; aud?: string[] | string; exp?: number; nbf?: number; iat?: number; jti?: string; }): any {
//   throw new Error('Function not implemented.');
// }

