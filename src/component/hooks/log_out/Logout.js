import { useDispatch } from "react-redux";
import { setIsLoading } from "../../../store/slice/profile-slice/ProfileSlice";
function useGetProfileData() {
  const dispatch = useDispatch();
function handleLogOut(){
dispatch(setIsLoading())
}
  return { handleLogOut };
}

export default useGetProfileData;
