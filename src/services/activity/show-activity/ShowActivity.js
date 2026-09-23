import { getRequest1 } from "../../https.services"
const ShowActivity=async(id)=>{
const response= await getRequest1(`/admin/activities/${id}`)
console.log("response show activitiy",response)
 
return response;

}
   
export default ShowActivity;