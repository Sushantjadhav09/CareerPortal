
import { Anchor } from 'tabler-icons-react'
import SignUp from '../SignUpLogin/SignUp'
import Login from '../SignUpLogin/Login'

const SignUpPage = () => {
  return (
    <div className="min-h-[90vh] bg-gray-800 font-['poppins'] overflow-hidden">
        <div className='w-screen h-screen flex *:shrink-0'>
          <Login/>
            <div className='w-1/2 h-full bg-gray-700 rounded-r-[200px] flex flex-col items-center gap-5 justify-center'>
                 <div className='flex gap-1  text-amber-400'>
                    <Anchor className='h-16 w-16 items-center' strokeWidth={3}/>
                    <div className='text-6xl font-semibold '>JobHook</div>
                 </div>
                 <div className='text-2xl text-gray-200 font-semibold'>Find the jon made for you</div>
            </div>
        <SignUp/>
        </div>
    </div>
  )
}

export default SignUpPage