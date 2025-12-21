import { Divider } from '@mantine/core'
import PostedJob from '../PostedJob/PostedJob'
import PostedJobDesc from '../PostedJob/PostedJobDesc'

const PostedJobPage = () => {
  return (
     <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
        <div className='flex gap-s'> 
          <PostedJob/>
          <PostedJobDesc/>
        </div>  
      </div>
  )
}

export default PostedJobPage