import { Avatar,Indicator } from '@mantine/core'
import React from 'react'
import {  Bell, Settings, Anchor } from 'tabler-icons-react'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <div className="w-full bg-gray-800 text-white flex justify-between px-6 items-center h-20">
        <div className='flex gap-3 gap-1 text-amber-400'>
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
    </div>
  )
}

export default Header