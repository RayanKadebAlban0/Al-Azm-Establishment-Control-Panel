import { postRequest } from "../https.services"
const PostLogin=async({login,password})=>{
const response= await postRequest('/admin/auth/login',
 { login: String(login),
   password: password
  }
 
  )
  console.log({login,password})

return response;

}
export default PostLogin;