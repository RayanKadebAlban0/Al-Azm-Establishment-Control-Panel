import { getRequest1 } from "../../https.services"
const GetActivitySearch=async()=>{
const response= await getRequest1('/admin/activities/search')
console.log("response get activit",response)
 
return response;

}
   
export default GetActivitySearch;