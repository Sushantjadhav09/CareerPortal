import { Avatar,Indicator } from '@mantine/core'
import {  Bell, Settings, Anchor } from 'tabler-icons-react'
import NavLinks from './NavLinks'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  return ( location.pathname!="/signup"?
    <div className="w-full bg-gray-800 text-white flex justify-between px-6 items-center h-20 font-['poppins']">
        <div className='flex gap-1  text-amber-400'>
          <Anchor className='h-10 w-10 items-center' strokeWidth={3}/>
            <div className='text-3xl font-semibold '>JobHook</div>
        </div>
        {NavLinks()}
        <div className='flex gap-3 items-center'>
            <div className='flex gap-3 items-center' >
              <div>
                Sushant</div>
                <Avatar src="/avatar.png" alt="it's me" />
            </div>
            <div className='bg-gray-700 p-1.5 rounded-full'>
            <Settings strokeWidth={1.5} />
            </div>
            <div className='bg-gray-700 p-1.5 rounded-full'>
              <Indicator color="yellow" processing size={8} offset={6}>
            <Bell  strokeWidth={1.5}/>
            </Indicator>
            </div>
        </div>
    </div>:<></>
  )
}

export default Header