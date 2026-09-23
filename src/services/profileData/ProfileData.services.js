import { getRequest } from "../../helper/getRequest";
export const getProfileData=async()=>{
     const response = await getRequest(
      'users ?field=id,name'

    );
return response;
}
export default getProfileData;