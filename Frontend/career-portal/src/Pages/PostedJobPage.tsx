import { Divider } from '@mantine/core'
import PostedJob from '../PostedJob/PostedJob'

const PostedJobPage = () => {
  return (
     <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
        <div> 
          <PostedJob/>
        </div>  
      </div>
  )
}

export default PostedJobPage