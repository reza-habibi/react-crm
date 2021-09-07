import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { fetchNewAccessJWT } from "../../api/userApi";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { getUserProfile } from "../../pages/Dashboard/userActions";
import { RootState } from "../../store";
import { loginSuccess } from "../Login/loginSlice";

export const PrivateRoute = ({ children, ...rest }: any) => {
  const login = useSelector((state: RootState) => state.Login);
  const { user } = useSelector((state: RootState) => state.User);

  const { isAuth } = login;
  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    user._id === "" && dispatch(getUserProfile());

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateAccessJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          isAuth ? (
            <DefaultLayout>{children}</DefaultLayout>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};
