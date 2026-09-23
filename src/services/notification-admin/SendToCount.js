import { postRequest1 } from "../https.services";
export const SendToCount=async({group_role, target_type,activity_ids})=>{
     const response = await postRequest1(
    '/admin/notifications/estimate-count',
    {
        group_role:group_role,
        target_type: target_type,
     activity_ids:activity_ids,
    }
    );
   
console.log(`response send to  count ${ target_type} :`,response)
return response;
}
export default SendToCount

