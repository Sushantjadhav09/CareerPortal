import { IconHeart, IconMapPin } from '@tabler/icons-react'
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';


const TalentCard = (props:any) => {
  return <div className='bg-gray-700 p-4 w-110 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'> 
        <div className='flex justify-between '>
            <div className='flex gap-2 items-center '>
                <div className='p-2 bg-gray-600 rounded-full '>
                    <Avatar size="lg" src={`/${props.image}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold text-lg'>{props.name}</div>
                    <div className='text-sm text-gray-300' > {props.role} &#x2022; {props.company} </div>
                </div>
            </div>
            <IconHeart className='text-gray-300 hover:cursor-pointer'/>
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-gray-600 text-amber-300 [&>div]:rounded-lg text-xs'>
            {
                props.topSkills.map((skill:any,index:any)=><div key={index}>{skill}</div>)
            }
            
            <div>SpringBoot</div>
            <div>MongoDB</div>
        </div>
         <Text className='text-xs! text-justify text-gray-300!' lineClamp={3}>{props.about}
         </Text>
        <Divider size="xs" color='white'/>
         
        <div className='flex justify-between'>
            <div className='font-semibold text-gray-200'>
                &#8377; {props.expectedCtc}
            </div>
            <div className='flex gap-1 text-gray-400 text-xs items-center'>
              <IconMapPin stroke={1.5} className='h-5 w-5' />  {props.location}
            </div>
        </div>
        <Divider size="xs" color='white'/>
        <div className='flex [&>*]:w-1/2 [&>*]:p-2'>
            <Link to="/talent-profile">
            <Button color='yellow' variant='outline' fullWidth>Profile</Button>
            </Link>
            <div>
            <Button color='yellow' variant='light' fullWidth>Message</Button>
            </div>
        </div>

    </div>
  
}

export default TalentCard