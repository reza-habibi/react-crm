import axios from "axios";
import { IIsAuth, INewUser } from "../types";

const rootUrl = "http://localhost:4030/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";

export const userRegister = (formData: INewUser) => {
  return new Promise<{ message: string; result: INewUser; status: string }>(
    async (resolve, reject) => {
      try {
        const result = await axios.post(userProfileUrl, formData);
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    }
  );
};

export const userLogin = (formData: { email: string; password: string }) => {
  return new Promise<{ status: string; data: IIsAuth; message: string }>(
    async (resolve, reject) => {
      try {
        const res = await axios.post(loginUrl, formData);

        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    }
  );
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

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const storedData = localStorage.getItem("crmSite");
      let crmSite;
      if (typeof storedData === "string") {
        crmSite = JSON.parse(storedData);
      }
      const { refreshJWT } = crmSite;
      console.log(refreshJWT);
      if (!refreshJWT) {
        reject("user not found!");
      }

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const res = await axios.get(newAccessJWT, {
        headers: {
          Authorization: refreshJWT,
        },
      });
      console.log(refreshJWT);
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
      }

      reject(false);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
