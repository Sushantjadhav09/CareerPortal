import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"
import { useEffect, useState } from "react"
import { getJobById } from "../Services/JobService"

const ApplyJobPage = () => {
  const navigate = useNavigate();
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
  return (
   <div className=" min-h-[90vh] bg-gray-800 font-['poppins'] p-4">
       
        <Button color="yellow" onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} variant="light">Back</Button>
        
        <ApplyJobComp {...job}/>
        </div>
  )
}

export default ApplyJobPage