import { getRequest1 } from "../../https.services"
const GetActivityId=async({id})=>{
const response= await getRequest1(`/admin/activities/${id}`)
console.log("response get  activity from id :",response)
 
return response;

}
   
export default GetActivityId;