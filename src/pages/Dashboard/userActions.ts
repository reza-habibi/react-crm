import { fetchUser } from "../../api/userApi";
import { getUserPending, getUserSuccess, getUserFail } from "./dashboardSlice";

export const getUserProfile = () => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  try {
    dispatch(getUserPending());

    const result = await fetchUser();

    if (result.user && result.user._id)
      return dispatch(getUserSuccess(result.user));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};