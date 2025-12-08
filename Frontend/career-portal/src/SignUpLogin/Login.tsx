import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useState } from 'react';
import { At  } from 'tabler-icons-react'
import { loginUser, registerUser } from '../Services/UserServices';


 const form = {
    
    email :"",
    password :""

  }

const Login = () => {
  const [data, setData] = useState(form);
   const handleChange =(event:any)=>{
    console.log(event);
     setData({...data,[event.target.name]:event.target.value})
   }
   const handleSubmit=() => {
    loginUser(data).then((res)=>{
      console.log(res);
    }).catch((err)=>console.log(err.response.data));
   }
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Create Account</div>
         <TextInput value={data.email} name="email" onChange={handleChange} className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput value={data.password} name="password" onChange={handleChange} withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <Button onClick={handleSubmit} color="yellow" autoContrast variant="filled">Login</Button>
         <div className="mx-auto text-gray-200">Don't have an account? <a href="/signup" className="text-amber-400 hover:underline">Sign Up</a></div>
      
    </div>
  )
}

export default Login