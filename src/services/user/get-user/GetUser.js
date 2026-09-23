import { getRequest1 } from "../../https.services";
export const getUser=async(id)=>{
     const response = await getRequest1(
 `/admin/users/${id}`);
  
return response;
}
export default getUser;