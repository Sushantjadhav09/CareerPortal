import { Avatar, TextInput } from '@mantine/core'
import { Search  } from 'tabler-icons-react'



const DreamJob = () => {
  return (
    <div className='flex items-center px-16'>
        <div className='flex flex-col w-[45%] gap-3'>
            <div className='text-6xl font-bold leading-tight text-gray-100 [&>span]:text-amber-400'>Find your <span> dream</span> <span> job</span> with us</div>
            <div className='text-gray-200'>Good life begins witha good company. Start explore thousands of jobs in one place.</div>
            <div className='flex gap-3 mt-5'>
                 <TextInput className='bg-gray-700 rounded-lg p-1 px-2 text-gray-100 [&_input]:text-gray-100!' variant="unstyled" label="Job Title" placeholder="Software Engineer"/>
                 <TextInput className='bg-gray-700 rounded-lg p-1 px-2 text-gray-100 [&_input]:text-gray-100!' variant="unstyled" label="Job Type" placeholder="Full Time"/>
                 <div className='flex items-center justify-center h-full w-20 bg-amber-400 text-gray-100 rounded-lg p-2 hover:bg-amber-500 cursor-pointer'>
                    <Search className='h-[85%] w-[85%]'/>
                 </div>
            </div>
        </div>
        <div className='w-[55%] flex items-center justify-center'>
            <div className='w-120 relative'>
                <img src="/Boy.png" alt="Boy" />
                <div className='absolute w-fit top-[50%] -right-10 border-amber-400 border rounded-lg p-2 backdrop-blur-md'>
                <div className='text-center mb-1 text-sm text-gray-100'>10k+ got job</div>
                     <Avatar.Group>
                     <Avatar src="/avatar1.png" />
                     <Avatar src="/avatar.png" />
                     <Avatar src="/avatar2.png" />
                     <Avatar>+9k</Avatar>
                     </Avatar.Group>   
                        
                </div>
                <div className='absolute w-fit top-[28%] -left-5 border-amber-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-10 h-10 p-1 bg-gray-700 rounded-lg'>
                          <img src="/Google.png" alt="" />
                        </div>
                        <div className='text-sm text-gray-100'>
                          <div>Software Engineer</div>
                          <div className='text-gray-200 text-xs'>New York</div>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-around text-gray-200 text-xs'>
                      <span>1 day ago</span>
                      <span>120 applicants</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DreamJob