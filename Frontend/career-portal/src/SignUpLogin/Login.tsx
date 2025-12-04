import { Button, PasswordInput, TextInput } from '@mantine/core'
import { At,Link  } from 'tabler-icons-react'

const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className='text-2xl font-semibold text-gray-200'>Create Account</div>
         <TextInput className="text-gray-200" withAsterisk leftSection={<At size={16} />} label="Email" placeholder="Your email"/>
         <PasswordInput withAsterisk className="text-gray-200" label="Password" placeholder="Enter the password" />
         <Button color="yellow" autoContrast variant="filled">Login</Button>
         <div className="mx-auto text-gray-200">Don't have an account? <a href="/signup" className="text-amber-400 hover:underline">Sign Up</a></div>
      
    </div>
  )
}

export default Login