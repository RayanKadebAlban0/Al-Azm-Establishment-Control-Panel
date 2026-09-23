import { getRequest1 } from "../../https.services"
const GetActivities=async()=>{
const response= await getRequest1("/admin/activities")
console.log("response get activities ",response)
 
return response;

}
   
export default GetActivities;