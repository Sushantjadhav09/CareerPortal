import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../JobDescription/JobDesc"
import RecommendedJobs from "../JobDescription/RecommendedJobs"

const JobDescPage = () => {
  return (
    <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
        <Link to="/find-jobs" className="my-5 inline-block ">
        <Button color="yellow" leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
        </Link>
        <div className="flex gap-5 justify-around">
        <JobDesc/>
        <RecommendedJobs/>
        </div>
    </div>
  )
}

export default JobDescPage