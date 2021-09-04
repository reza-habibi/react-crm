import React from "react";
import { Redirect, Route } from "react-router-dom";
import { DefaultLayout } from "../../layout/DefaultLayout";

export const PrivateRoute = ({ children, ...rest }: any) => {
  const isAuth: boolean = true;
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
