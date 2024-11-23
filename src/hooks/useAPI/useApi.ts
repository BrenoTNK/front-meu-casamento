import { useSelector } from "react-redux";
import { RootState } from "../useRedux/store";
import { createApi } from "@src/services/api";

export const useApi = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return createApi("http://localhost:3000/api", token);
};
