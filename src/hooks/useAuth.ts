import { useContext } from "react";
import { AuthContext } from "@services/AuthContext";


function useAuth() {
  return useContext(AuthContext);
}


export default useAuth;