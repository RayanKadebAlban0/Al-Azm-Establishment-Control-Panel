import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slice/student-skice/StudentSlice";
import profilReducer from './slice/profile-slice/ProfileSlice';
import activityReducer from './slice/activity-slice/ActivitySlice';

const toolkitReducers = {
  student1:studentReducer,
student2:profilReducer,
activitiesData: activityReducer,
};
const store = configureStore({
  reducer: toolkitReducers,
});
export default store;