
import { Anchor } from 'tabler-icons-react'
import SignUp from '../SignUpLogin/SignUp'
import Login from '../SignUpLogin/Login'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SignUpPage = () => {
  const location = useLocation()
  const [animate, setAnimate] = useState(false);

useEffect(() => {
  setTimeout(() => setAnimate(true), 10);
}, []);

  return (
    <div className="min-h-[90vh] bg-gray-800 font-['poppins'] overflow-hidden">
<div
  className={`
    w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 
    transition-all ease-in-out duration-1000

    ${animate && location.pathname === '/signup'
      ? '-translate-x-1/2 rounded-[30px]'
      : 'translate-x-0 rounded-[0px]'
    }
  `}
>
    <Login/>
            <div className={`w-1/2 h-full bg-gray-700 transition-all duration-1200 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} flex flex-col items-center gap-5 justify-center`}>
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