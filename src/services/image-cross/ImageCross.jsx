import { postRequestMulti} from "../https.services"
const postImage=async(formData,id)=>{
const response= await postRequestMulti(`/admin/activities/${id}`,formData)
console.log(id)
return response;
}
export default postImage;