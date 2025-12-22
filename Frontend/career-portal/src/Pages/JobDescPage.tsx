import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useParams } from "react-router-dom"
import JobDesc from "../JobDescription/JobDesc"
import RecommendedJobs from "../JobDescription/RecommendedJobs"
import { useEffect, useState } from "react"
import { getJobById } from "../Services/JobService"

const  JobDescPage = () => {
  const {id}=useParams();
  const[job,setJob] = useState<any>(null);
  useEffect(()=>{
    window.scrollTo(0,0);
    getJobById(id).then((res)=>{
      setJob(res);
    }).catch((err=>{
      console.log(err);
    }))
  }, [id])
  //  const { id } = useParams<{ id: string }>();

  console.log("JOB ID FROM URL 👉", id);
  return (
    <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
        <Link to="/find-jobs" className="my-5 inline-block ">
        <Button color="yellow" leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
        </Link>
        <div className="flex gap-5 justify-around">
        <JobDesc {...job}/>
        <RecommendedJobs/>
        </div>
    </div>
  )
}

export default JobDescPage