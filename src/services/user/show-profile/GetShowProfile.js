import { getRequest1 } from "../../https.services";
export const getShowUser=async()=>{
     const response = await getRequest1(
    '/profile',
    'application/json'
    );
    console.log(response)
  
   
return response;
}
export default getShowUser;