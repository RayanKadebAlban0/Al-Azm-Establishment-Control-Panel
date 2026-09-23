import { getRequest1 } from "../../https.services";
export const getLastActivities = async () => {
  const response = await getRequest1(
    "/controlpanel/latest-activities",
    "application/json",
  );
  console.log("get last activity", response);

  return response;
};
export default getLastActivities;
