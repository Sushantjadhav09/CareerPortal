 import axios from "axios"
const base_url = "http://localhost:9295/auth/"
 
 const loginUser = async (login:any)=>{
    return axios.post(`${base_url}login`,login)
    .then(res=>res.data)
    .catch(error=>{throw error;})
 }

 export{loginUser}