import Axios from "axios";

const API_URL = "http://localhost:8001/login";

const signup = (email,password,name,confirmpassword)=>{
    return Axios.post (API_URL,{
        email,password,name,confirmpassword
    }).then((response)=>{
        if(response.data.token){
            localStorage.setItem("login",JSON.stringify(response.data));
        }
        return response.data;
    })
}

const login =(email,password)=>{
    return Axios.post (API_URL+"/loginuser",{
        email,password
    })
    .then((response)=>{
        if(response.data.token){
            localStorage.setItem("login",JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout =()=>{
    localStorage.removeItem("login");
}

const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem("login"));
}

const AuthService = {
    signup ,login,logout,getCurrentUser
}

export default AuthService;