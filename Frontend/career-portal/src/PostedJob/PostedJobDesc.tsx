import { Badge, Tabs } from '@mantine/core'
import React from 'react'
import Jobs from '../FindJobs/Jobs'
import { talents } from '../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'
import JobDescPage from '../Pages/JobDescPage'

const PostedJobDesc = () => {
  return (<div className='mt-5 w-3/4 px-5 ml-15' >
    <div className='text-2xl font-semibold flex items-center' >Software Engineer<Badge ml="sm" variant="light" color='gold' size='sm'>badge</Badge></div>
    <div className='font-medium text-gray-300 mb-5'>New York, United States</div>
    <div>
        <Tabs  color='gold' radius="lg" variant="outline" defaultValue="Overview">
      <Tabs.List className="[&_button:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-amber-400">
        <Tabs.Tab value="Overview">Overview</Tabs.Tab>
        <Tabs.Tab value="Applicants">Applicants</Tabs.Tab>
        <Tabs.Tab value="Interviewing">Interviewing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Overview" className='[&>div]:w-full'>
        <JobDescPage/>
      </Tabs.Panel>
      <Tabs.Panel value="Applicants">
        <div className=' flex flex-wrap gap-5 mt-10'>
            {
                talents.map((talent,index)=> index < 6 && <TalentCard key={index}{...talent}/>)
            }
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="Interviewing">s</Tabs.Panel>
    </Tabs>
    </div>
    </div>
  )
}

export default PostedJobDesc