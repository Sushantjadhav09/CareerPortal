import { Anchor, BrandFacebook,BrandLinkedin, BrandInstagram } from "tabler-icons-react"
import { footerLinks } from "../Data/Data"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Divider } from "@mantine/core";

const Footer = () => {
    const location = useLocation();
      const navigate = useNavigate();

  return ( location.pathname!="/signup"&& location.pathname!="/login"? 
    <div className=" flex flex-col bg-gray-800">
    <div className="p-20 pb-5 flex gap-5 justify-around bg-gray-800 font-['poppins']"> 
        <div className="w-1/4 flex flex-col gap-4">
              <div className='flex gap-1  text-amber-400'>
                   <Anchor className='h-6 w-6 items-center' strokeWidth={3}/>
                   <div className='text-xl font-semibold '>JobHook</div>
               </div>
               <div className="text-sm text-gray-300">
                Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
               </div>
               
               <div className="flex gap-3 text-amber-400 [&>div]:bg-gray-700 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer">
                    <div><BrandFacebook/></div>
                    <div><BrandInstagram/></div>
                    <div><BrandLinkedin/></div>
               </div>
               
        </div>
       
        {
            footerLinks.map((item,index) =><div key={index}>
                <div className="text-lg font-semibold mb-4 text-amber-400">{item.title}</div>
                {
                    item.links.map((link,index)=><div key={index} className="text-gray-300 text-sm hover:text-amber-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out ">{link}</div>)
                }


            </div>)
        }  

    <Button className='mt-30 right-10' color="yellow" onClick={()=>navigate("/signup")}  variant="outline">Logout</Button>
    </div>
    <div>
      <Divider size="xs" mx="md" color="white"/>
    </div>
    <div className="bg-gray-800 text-stone-300 font-semibold text-xl mt-6 mb-6 text-center">
        Designed & Developed By <a className="text-amber-400 hover:underline" href="https://github.com/Sushantjadhav09" target="_blank">Sushant Jadhav</a>

    </div>
    </div>
    :<></>
    
  )
}

export default Footer