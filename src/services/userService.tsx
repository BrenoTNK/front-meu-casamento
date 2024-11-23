import { AxiosInstance } from "axios";

const registerService = async (api: AxiosInstance, params: user) => {
  try {
    return await api.post("/users/v1", { data: params });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

const loginService = async (
  api: AxiosInstance,
  params: { email: string; password: string }
) => {
  try {
    return await api.post("/users/v1/login", { data: params });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

const updateUserService = async (api: AxiosInstance, params: user) => {
  try {
    return await api.put("/users/v1", { data: params });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

const getUserService = async (api: AxiosInstance) => {
  try {
    return await api.get("/users/v1");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

interface user {
  name?: string;
  email?: string;
  password?: string;
}

export { registerService, loginService, updateUserService, getUserService };
