import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useState } from 'react';
import { At  } from 'tabler-icons-react'
// import { loginUser, registerUser } from '../Services/UserServices';
import { loginValidation } from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { setJwt } from '../Slices/JwtSlice';
import { loginUser } from '../Services/AuthService';
import { useDispatch } from 'react-redux';





 const form = {
    
    email :"",
    password :""

  }

const Login = () => {
  const [data, setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

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
      notifications.show({
        title: 'Login Successful',
        message: "Welcome to the Jobhook",
        color: "green",
        withBorder: true,
      });
      console.log("LOGIN RESPONSE:", res);
      console.log("JWT TOKEN:", res.data?.jwt);


      dispatch(setJwt(res.jwt));
      setTimeout(() => {
        navigate("/");
      }, 4000);
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


// function dispatch(arg0: { payload: string; type: "jwt/setJwt"; }) {
//   throw new Error('Function not implemented.');
// }
// function dispatch() {
//   throw new Error('Function not implemented.');
// }
