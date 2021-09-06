import { fetchUser } from "../../api/userApi";
import { getUserPending, getUserSuccess, getUserFail } from "./dashboardSlice";

export const getUser = () => async (dispatch: any) => {
  try {
    dispatch(getUserPending());
    const user = await fetchUser();

    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
