import {postRequestMulti} from "../../https.services"
export default async function PostYounth(formData) {
    const response = await postRequestMulti(
   '/admin/users/youth',formData
      
    );
    console.log("respnse post younth",response)

}
