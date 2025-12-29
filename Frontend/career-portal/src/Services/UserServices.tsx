import axios from "axios"
import axiosInstance from "../Interceptor/AxiosInterceptor";
const base_url = "http://localhost:9295/users/"
 
 const registerUser = async (user:any)=>{
    return axiosInstance.post(`/users/register`,user)
    .then(res=>res.data)
    .catch(error=>{throw error;})
 }

  const loginUser = async (login:any)=>{
    return axiosInstance.post(`/users/login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;})
 }

 export {registerUser,loginUser}