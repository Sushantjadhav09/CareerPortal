import { ActionIcon, Button, Divider, MenuDivider } from "@mantine/core"
import { IconBookmark, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../Data/JobDescData"

const JobDesc = () => {
    const data = desc;
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
        <div className="" dangerouslySetInnerHTML={{__html:data}}>

        </div>

    </div>

  )
}

export default JobDesc