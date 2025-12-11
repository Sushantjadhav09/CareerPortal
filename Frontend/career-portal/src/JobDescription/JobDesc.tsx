import { IconBookmark } from "@tabler/icons-react"

const JobDesc = () => {
  return (
    <div className="w-2/3">
        <div className='flex justify-between '>
            <div className='flex gap-2 items-center '>
                <div className='p-2 bg-gray-600 rounded-md '>
                    <img className='h-7' src={`/Icons/Google.png`} alt="" />
                </div>
                <div>
                    <div className='font-semibold'>Software Enginner</div>
                    <div className='text-xs text-gray-300' > Google &#x2022; 48 Applicants </div>
                </div>
            </div>
            <IconBookmark className='text-gray-300 hover:cursor-pointer'/>
        </div>
    </div>

  )
}

export default JobDesc