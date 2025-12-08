import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput, } from "@mantine/core"
import { useState } from "react";
import { Link } from "react-router-dom"
import  {At, Password } from 'tabler-icons-react'
import { registerUser } from "../Services/UserServices";
import { signupValidation } from "../Services/FormValidation";

  const form = {
    name :"",
    email :"",
    password :"",
    confirmPassword :"",
    accountType :"CANDIDATE",

  }


const SignUp = () => {
   const [value, setValue] = useState('react');
   const [data, setData] = useState(form);
   const [formError, setFormError] = useState(form);
   const handleChange =(event:any)=>{
    console.log(event);
    if(typeof(event)=="string"){
      setData({...data, accountType:event});
      return;
    }
        let name = event.target.name, value = event.target.value;
       setData({...data,[name]:value})
       setFormError({...formError,[name]:signupValidation(name,value)})
       if(name === "Password" && data.confirmPassword !== ""){
        let err="";
        if(data.confirmPassword !== value) err="Password do not match.";
        setFormError({...formError,[name]:signupValidation(name,value),confirmPassword:err});
       } 
       if(name === "confirmPassword"){
        if(data.password !== value)setFormError({...formError, [name]:"Password do not match."})
       }
      
   }
   const handleSubmit=() => {
    registerUser(data).then((res)=>{
      console.log(res);
    }).catch((err)=>console.log(err));
   }
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Create Account</div>
         <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} className="text-gray-200" withAsterisk label="Full Name" placeholder="Your name"/>
         <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk className="text-gray-200" label="Confirm Password" placeholder="Confirm  password" />
          <Radio.Group
          className="text-gray-200 "
      value={data.accountType}
      onChange={handleChange}
      label="You are"
      withAsterisk
    >
      <Group mt="xs">
      <Radio value="CANDIDATE" color="yellow" label="Candidate " className="py-4 px-6 border hover:bg-gray-700 has-checked:bg-amber-400/5 has-checked:border-amber-400 border-gray-700 rounded-lg" />
      <Radio value="COMPANY" color="yellow" label="Company"  className="py-4 px-6 border hover:bg-gray-700 has-checked:bg-amber-400/5 has-checked:border-amber-400 border-gray-700 rounded-lg" />
      </Group>
    </Radio.Group>
         <Checkbox className="text-gray-200" color="yellow" autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}/>
         <Button onClick={handleSubmit} color="yellow" autoContrast variant="filled">Sign up</Button>
         <div className="mx-auto text-gray-200">Have an account? <Link to="/login" className="text-amber-400 hover:underline">Login</Link></div>
      
    </div>
  )
}

export default SignUp