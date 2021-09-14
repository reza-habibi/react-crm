import { userRegister } from "../../api/userApi";

import { INewUser } from "../../types";

import {
  registrationPending,
  registrationSuccess,
  registrationFail,
} from "./userRegistrationSlice";

export const userRegistration =
  (formData: INewUser) => async (dispatch: any) => {
    try {
      dispatch(registrationPending());

      const result = await userRegister(formData);
      console.log(result);
      result.status === "success"
        ? dispatch(registrationSuccess(result.message))
        : dispatch(registrationFail(result.message));
    } catch (error) {
      dispatch(registrationFail(error));
    }
  };
