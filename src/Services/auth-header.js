export default function authHeader(){
    const login= JSON.parse(localStorage.getItem("login"));
    if(login && login.token){
        // return {"x-auth-token": login.token}
       return { Authorization: 'Bearer ' + login.token };
    } else {
        return{}
    }
}