import { getRequest1 } from "../https.services"
const GetDashboard=async()=>{
const response= await getRequest1("/leaderboard")
console.log("response get dashboard ",response)
 
return response;

}
   
export default  GetDashboard;