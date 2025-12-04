import { Anchor, Button, Checkbox, PasswordInput, TextInput, } from "@mantine/core"
import { Link } from "react-router-dom"
import  {At } from 'tabler-icons-react'




const SignUp = () => {

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Create Account</div>
         <TextInput className="text-gray-200" withAsterisk label="Full Name" placeholder="Your name"/>
         <TextInput className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <PasswordInput withAsterisk className="text-gray-200" label="Confirm Password" placeholder="Confirm  password" />
         <Checkbox className="text-gray-200" autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>}/>
         <Button color="yellow" autoContrast variant="filled">Sign up</Button>
         <div className="mx-auto text-gray-200">Have an account? <Link to="/login" className="text-amber-400 hover:underline">Login</Link></div>
      
    </div>
  )
}

export default SignUp