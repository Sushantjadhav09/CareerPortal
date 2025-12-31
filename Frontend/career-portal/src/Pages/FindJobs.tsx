import { Button, Divider } from "@mantine/core"
import Searchbar from "../FindJobs/Searchbar"
import Jobs from "../FindJobs/Jobs"
import { useNavigate } from "react-router-dom"
import { IconArrowLeft } from "@tabler/icons-react"


const FindJobs = () => {
  const navigate = useNavigate()
  return (
     <div className="min-h-screen bg-gray-800 font-['poppins']">
      <Searchbar/>
      <Divider size="xs" mx="md"/>
      <Button mt="md" ml="md" color="yellow" onClick={()=>navigate("/")} leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
      <Jobs/>
    </div>
  )
}

export default FindJobs