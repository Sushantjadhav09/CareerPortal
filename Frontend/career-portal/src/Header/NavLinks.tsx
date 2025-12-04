import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinks = () => {
    const links = [
        {name:"Find Jobs",url:"/find-jobs"},
        {name:"Find Talents",url:"/find-talents"},
        {name:"Upload Jobs",url:"/upload-jobs"},
        {name:"About Us",url:"/about-us"},
        {name:"SignUp",url:"/signup"},
    ]
    const location = useLocation();
  return (
    <div className='flex gap-5 h-full items-center text-gray-300'>
           {
            links.map((link,index)=><div className={`${location.pathname==link.url?"text-amber-400 border-amber-400":"border-transparent"}border-t-[3px] h-full flex items-center`}>
              <Link key={index} to={link.url}>{link.name}</Link>
            </div>)
           }
        </div>
  )
}

export default NavLinks