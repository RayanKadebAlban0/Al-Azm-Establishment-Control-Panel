import { getRequest1 } from "../../../services/https.services";
export const getUsers=async(pageNumber)=>{
     const response = await getRequest1(`/admin/users?page=${pageNumber}`);
console.log("get usersss:",response)
return response;
}
export default getUsers;