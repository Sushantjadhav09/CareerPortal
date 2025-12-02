import React from 'react'
import Marquee from 'react-fast-marquee' 
import { companies } from '../Data/Data'
import { Divide } from 'tabler-icons-react'

const Companies = () => {
  return (
    <div className='mt-20 pb-5'>
        <div className='text-4xl text-center mb-10 font-semibold text-gray-100'>Trusted By <span className='text-amber-400'>1000+</span> Compnies</div>
        <Marquee pauseOnHover={true}>
            {
                companies.map((company,index)=><div key={index} className='mx-8 px-2 py-1 hover:bg-gray-600 rounded-xl cursor-pointer '>
                    <img className='h-14' src={`/Compnies/${company}.png`} alt={company} />
                </div>)
            }
           
        </Marquee>
    </div>
  )
}

export default Companies