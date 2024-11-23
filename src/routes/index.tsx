import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useSelector } from "react-redux";
import { RootState } from "@src/hooks/useRedux/store";

export const Routes = () => {
  const signed = useSelector((state: RootState) => state.auth.token);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};
