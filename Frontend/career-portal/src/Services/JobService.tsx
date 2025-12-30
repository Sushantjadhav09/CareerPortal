import axiosInstance from "../Interceptor/AxiosInterceptor";

const postJob = async (job:any)=>{
    return axiosInstance.post(`/jobs/post`,job)
    .then(result => result.data)
    .catch(error => {throw error});
    
}
  
const getAllJobs = async()=>{
    return axiosInstance.get(`/jobs/getAllJobs`)
    .then(result => result.data)
    .catch(error => {throw error})
}

const getJobById = async(id:any)=>{
    return axiosInstance.get(`/jobs/getJobById/${id}`)
    .then(result => result.data)
    .catch(error => {throw error})

}

const applyJob =async (id:any, applicant:any )=>{
    return axiosInstance.post(`/jobs/apply/${id}`,applicant)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const getAllApplicants = async()=>{
    return axiosInstance.get(`/jobs/getAllapplicants`)
    .then(result => result.data)
    .catch(error => {throw error})
}

export{postJob, getAllJobs, getJobById, applyJob,getAllApplicants}