import {postRequestMulti} from "../../https.services"
export default async function PostVolunteer(formData) {
    const response = await postRequestMulti(
   `/admin/users/volunteer`,formData
      
    );
    console.log("respnse post Add volunteer",response)

}
