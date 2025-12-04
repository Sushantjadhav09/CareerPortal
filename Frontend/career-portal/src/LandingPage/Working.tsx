import React from 'react'
import { work } from '../Data/Data'
import { Avatar } from '@mantine/core'

const Working = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-4xl text-center mb-3 font-semibold text-gray-100'>How it <span className='text-amber-400'>Works</span></div>
        <div className='text-lg mx-auto mb-10 text-gray-300 text-center w-1/2'>Effortlessly navigate through the process and land your dream job.</div>
        <div className='flex px-16 justify-between items-center'>
            <div className='relative'>
                <img className='w-120' src="/Working/Girl.png" alt="girl" />
                <div className=' top-[15%] right-0 absolute flex flex-col items-center gap-1 w-36 border border-amber-400 rounded-xl py-3 px1 backdrop-blur-md'> 
                    <Avatar className='h-16! w-16!' src="avatar1.png" alt="it's me" />
                    <div className='text-sm font-semibold text-center text-gray-200'>Complete your profile</div>
                    <div className='text-xs text-gray-300'>70% Completed</div>
                </div>
            </div>
            <div className='flex flex-col gap-10'>
               {
                work.map((item,index)=> <div key={index} className='flex items-center gap-4'>
                    <div className='p-2.5 bg-amber-300 rounded-full'>
                        <img className='h-12 w-12' src={`/public/Working/${item.name}.png`} alt={item.name} />
                    </div>
                    <div>
                        <div className='text-gray-200 text-xl  font-semibold'>{item.name}</div>
                        <div className='text-gray-300'>{item.desc}</div>
                    </div>
                </div>)
               }
            </div>
        </div>
    </div>
  )
}

export default Working