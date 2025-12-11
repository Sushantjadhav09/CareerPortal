import { Divider } from "@mantine/core"
import Searchbar from "../FindJobs/Searchbar"
import Jobs from "../FindJobs/Jobs"


const FindJobs = () => {
  return (
     <div className="min-h-screen bg-gray-800 font-['poppins']">
      <Searchbar/>
      <Divider size="xs" mx="md"/>
      <Jobs/>
    </div>
  )
}

export default FindJobs