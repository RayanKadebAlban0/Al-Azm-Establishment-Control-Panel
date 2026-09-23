import { patchRequest } from "../../https.services";
export const BlockUser=async(id)=>{
     const response = await patchRequest(
 `/admin/users/${id}/block`);
console.log("block user :",response)
return response;
}
export default BlockUser;