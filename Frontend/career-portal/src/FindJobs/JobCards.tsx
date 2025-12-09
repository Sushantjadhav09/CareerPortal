import { IconBookmark } from '@tabler/icons-react'
import React from 'react'

const JobCards = () => {
  return <div className='bg-gray-800 p-4'> 
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center '>
                <div className='p-2 bg-gray-700 rounded-md'>
                    <img className='h-7' src="/Icons/Microsoft.png" alt="" />
                </div>
                <div>
                    <div className='font-semibold'>Product designer</div>
                    <div className='text-xs text-gray-300' > Meta &#x2022; 25 Applicants </div>
                </div>
            </div>
            <IconBookmark/>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  
}

export default JobCards