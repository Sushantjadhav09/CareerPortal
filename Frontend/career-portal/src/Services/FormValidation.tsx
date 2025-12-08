const signupValidation=(name:string,value:string)=>{

    switch(name){
            case "name":
                if(value.length===0)return "Name is Required"
                return "";
            case "email":
                if(value.length===0)return "Email is Required"
                return "";  
                if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
                    return "Email is Invalid";
                return "";
            case "password":
                if(value.length===0)return "Passowrd is Required"
                if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))
                    return "Password must be 8-15 Characters with an uppercase, a lowercase, a number and a special character."
                return "";
                default:
                    return "";

    }
}
export {signupValidation};