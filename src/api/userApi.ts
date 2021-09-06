import axios from "axios";
import { IIsAuth } from "../types.ds";

const rootUrl = "http://localhost:4030";
const loginUrl = rootUrl + "/v1/user/login";
const userProfileUrl = rootUrl + "/v1/user";

export const userLogin = (formData: { email: string; password: string }) => {
  return new Promise<{ data: IIsAuth }>(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, formData);

      sessionStorage.setItem("accessJWT", res.data.accessJWT);
      localStorage.setItem(
        "crmSite",
        JSON.stringify({ refreshJWT: res.data.refreshJWT })
      );
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("user not found!");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
