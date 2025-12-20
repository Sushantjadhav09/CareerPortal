import { Tabs } from '@mantine/core'
import React from 'react'
import { activeJobs } from '../Data/PostedJob'
import PostedJobCard from './PostedJobCard'

const PostedJob = () => {
  return (<div className='w-1/6 mt-5'>
    <div className='text-2xl mb-5 font-semibold'>Jobs</div>
    <div>
         <Tabs autoContrast color='gold' variant="pills" defaultValue="Active">
      <Tabs.List className="[&_button[area-selected='false']]:bg-gray-800 font-medium">
        <Tabs.Tab value="first">Active[4]</Tabs.Tab>
        <Tabs.Tab value="second">Drafts[1]</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <div className='flex flex-col gap-5 mt-5'>
            {
                activeJobs.map((item,index)=><PostedJobCard key={index} {...item}/>)
            }
        </div>
     </Tabs.Panel>
      <Tabs.Panel value="second">
        S 
      </Tabs.Panel>
    </Tabs>
    </div>

    </div>
  )
}

export default PostedJob