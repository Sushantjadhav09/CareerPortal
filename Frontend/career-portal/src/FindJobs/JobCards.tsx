import { IconBookmark, IconClockHour3 } from '@tabler/icons-react'
import { Divider, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

type Applicant = {
  applicantId: number;
  timestamp: string; // or Date if you parse it
  applicationStatus: string;
};
const JobCards = (props:any) => {
  return <Link to={`/jobs/${props.id}`} className='bg-gray-700 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400'> 
        <div className='flex justify-between '>
            <div className='flex gap-2 items-center '>
                <div className='p-2 bg-gray-600 rounded-md '>
                    <img className='h-7' src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>{props.jobTitle}</div>
<div>
        {props.company} • {props.applicants?props.applicants.length:0} Applicants
        <ul>
          {props.applicants?.map((applicant: Applicant) => (
            <li key={applicant.applicantId}>
              {applicant.applicationStatus} at {new Date(applicant.timestamp).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
                </div>
            </div>
            <IconBookmark className='text-gray-300 hover:cursor-pointer'/>
        </div>
        <div className='flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-gray-600 text-amber-300 [&>div]:rounded-lg text-xs'  >
            <div>{props.experience}</div>
            <div>{props.jobtype}</div>
            <div>{props.location}</div>
        </div>
         <Text className='text-xs! text-justify text-gray-300!' lineClamp={3}>{props.about}
         </Text>
        <Divider size="xs" color='white'/>
         
        <div className='flex justify-between'>
            <div className='font-semibold text-gray-200'>
                &#8377; {props.packageOffered}
            </div>
            <div className='flex gap-1 text-gray-400 text-xs items-center'>
              <IconClockHour3 stroke={1.5} className='h-5 w-5' />  {props.postedDaysAgo} days ago
            </div>
        </div>
    </Link>
  
}

export default JobCards