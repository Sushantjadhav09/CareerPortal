import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"

const ApplyJobPage = () => {
  return (
   <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
       <Link to="/jobs" className="my-5 inline-block ">
        <Button color="yellow" leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
        </Link>
        <ApplyJobComp/>
        </div>
  )
}

export default ApplyJobPage