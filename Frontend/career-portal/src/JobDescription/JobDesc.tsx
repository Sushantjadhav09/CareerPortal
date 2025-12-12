import { ActionIcon, Button, Divider, MenuDivider } from "@mantine/core"
import { IconBookmark, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../Data/JobDescData"
import DOMPurify from 'dompurify'

const JobDesc = () => {
    const data =DOMPurify.sanitize(desc) ;
    return (
    <div className="w-2/3">
        <div className='flex justify-between '>
            <div className='flex gap-2 items-center '>
                <div className='p-3 bg-gray-600 rounded-xl '>
                    <img className='h-14' src={`/Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-2xl'>Software Enginner III</div>
                    <div className='text-lg text-gray-300' > Google &#x2022; 3 days ago &#x2022; 48 Applicants </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
            <Button color='yellow' variant='light' size="sm" fullWidth>Apply</Button>
                </Link>
            <IconBookmark className='text-amber-400 hover:cursor-pointer'/>    
            </div>
        </div>
        <Divider my="xl"/>
        <div className="flex justify-between" >
            {
                card.map((item:any,index:number)=> <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon className="h-12! w-12!" color="yellow" variant="light" radius="xl" aria-label="Settings">
            <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-gray-300" >{item.name}</div>
            <div className="font-semibold" >{item.value}</div>
            </div> )
            }
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-xl font-semibold" >Required Skills</div>
            <div className="mt-5 flex flex-wrap gap-2">
                {
                    skills.map((item,index)=><ActionIcon key={index} className="h-fit! w-fit! font-medium" color="yellow" p="xs" variant="light" radius="xl" aria-label="Settings">{item}
            </ActionIcon>)
                }
                
            </div>
        </div>
        <Divider my="xl"/>
        <div className="[&_h4]:text-xl [&_h4]:my-5 [&_li]:marker:text-amber-400 [&_p]:text-justify [&_*]:text-gray-300  [&_li]:mb-1 [&_h4]:font-semibold
        [&_h4]:text-gray-200 " dangerouslySetInnerHTML={{__html:data}}>
        </div>
        <Divider my="xl"/>
        <div>
            <div className="text-xl font-semibold" >About Company</div>
             <div className='flex justify-between mt-8 mb-3'>
            <div className='flex gap-2 items-center '>
                <div className='p-3 bg-gray-600 rounded-xl '>
                    <img className='h-8' src={`/Icons/Google.png`} alt="" />
                </div>
                <div className="flex flex-col">
                    <div className='font-medium text-lg'>Google</div>
                    <div className='text-lg text-gray-300' >10K+ Employees </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
            <Button color='yellow' variant='light' size="sm" fullWidth>Company Page</Button>
                </Link>
            </div>
        </div>
        <div className="text-gray-300 text-justify" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quae distinctio vero! Esse praesentium in, cumque nam excepturi dolorem sit officia officiis voluptate accusantium, tenetur ducimus libero a rem itaque eum facere omnis, architecto nemo! Delectus quibusdam voluptate illum explicabo.</div>
        </div>
    </div>

  )
}

export default JobDesc