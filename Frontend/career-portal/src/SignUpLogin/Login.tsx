import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useState } from 'react';
import { At  } from 'tabler-icons-react'
import { loginUser, registerUser } from '../Services/UserServices';
import { loginValidation } from '../Services/FormValidation';
import { notifications } from '@mantine/notifications';


 const form = {
    
    email :"",
    password :""

  }

const Login = () => {
  const [data, setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
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
    if(valid){
      loginUser(data).then((res)=>{
        console.log(res);
        notifications.show({
               title: 'Login Successful',
               message: "Redirectiong to homepage",
               color:"red",
               withBorder:true,
               className:"!border-red-500"
             })
      }).catch((err)=>{
        console.log(err);
        notifications.show({
       title: 'Login Failed',
       message: err.response.data.errorMessage,
       color:"red",
       withBorder:true,
       className:"!border-red-500"
     })
      });
    }
   }
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Login Account</div>
         <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <Button onClick={handleSubmit} color="yellow" autoContrast variant="filled">Login</Button>
         <div className="mx-auto text-gray-200">Don't have an account? <a href="/signup" className="text-amber-400 hover:underline">Sign Up</a></div>
      
    </div>
  )
}

export default Login