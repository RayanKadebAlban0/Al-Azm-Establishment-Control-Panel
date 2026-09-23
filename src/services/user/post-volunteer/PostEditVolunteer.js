import {postRequestMulti} from "../../https.services"
export default async function PostEditVolunteer(formData,id) {
    const response = await postRequestMulti(
   `/admin/users/volunteer/${id}`,formData
      
    );
    console.log("respnse post Edit volunteer",response)

}
