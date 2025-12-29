import axios from "axios";
import axiosInstance from "../Interceptor/AxiosInterceptor";

const base_url="http://localhost:9295/jobs/";
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
    return axios.post(`${base_url}apply/${id}`,applicant)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const getAllApplicants = async()=>{
    return axios.get(`${base_url}getAllapplicants`)
    .then(result => result.data)
    .catch(error => {throw error})
}

export{postJob, getAllJobs, getJobById, applyJob,getAllApplicants}