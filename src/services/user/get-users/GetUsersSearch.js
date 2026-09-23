import { getRequest1 } from "../../https.services";
export const getUsersSearch=async()=>{
     const response = await getRequest1(
 '/admin/users/search');
console.log("get usersss:",response)
return response;
}
export default getUsersSearch;