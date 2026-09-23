import { postRequest1 } from "../https.services";
import { postRequestMulti } from "../https.services";
export const Send=async({user_ids,role,activity_ids,delivery_methods,title,content,link,scheduled_at,state})=>{
     const response = await postRequest1(
    '/admin/notifications/send',
    {user_ids:user_ids,
        group_role:role,
        activity_ids:activity_ids,
        title:title,
        content:content,
       link:link,
        scheduled_at:scheduled_at,
        target_type:state,
       delivery_methods:delivery_methods
    }
    );
    console.log( user_ids
       )
console.log(`response send to ${state} :`,response)
return response;
}

export const SendMulti=async(formData)=>{
     const response = await postRequestMulti(
    'api/admin/notifications/send',
    formData
    );
    console.log("atta",formData
       )
console.log(`response send to ${formData} with attachment :`,response)
return response;
}
export default Send;