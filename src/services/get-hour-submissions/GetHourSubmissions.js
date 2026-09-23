import { getRequest1 } from "../https.services"
const GetHourSubmissions=async()=>{
const response= await getRequest1('/admin/activities/1/hour-submissions')
console.log("response get  hour-submissions:",response)
 
return response;

}
   
export default GetHourSubmissions;