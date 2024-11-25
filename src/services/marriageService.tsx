import { AxiosInstance } from "axios";

const createMarriageService = async (api: AxiosInstance, params: marriage) => {
  try {
    return await api.post("/marriages", { data: params });
  } catch (error) {
    console.error("Erro ao criar casamento:", error);
    throw error;
  }
};

const updateMarriageService = async (
  api: AxiosInstance,
  id: number,
  params: marriage
) => {
  try {
    return await api.put(`/marriages/${id}`, { data: params });
  } catch (error) {
    console.error("Erro ao atualizar casamento:", error);
    throw error;
  }
};

const getMarriagesByUserService = async (
  api: AxiosInstance,
  userId: number
) => {
  try {
    return await api.get(`/marriages/user/${userId}`);
  } catch (error) {
    console.error("Erro ao buscar casamentos do usuário:", error);
    throw error;
  }
};

const deleteMarriageService = async (api: AxiosInstance, id: number) => {
  try {
    return await api.delete(`/marriages/${id}`);
  } catch (error) {
    console.error("Erro ao deletar casamento:", error);
    throw error;
  }
};

interface marriage {
  person1?: string;
  person2?: string;
  numberGuests?: number;
  party?: string;
  religious?: string;
  honeyMoon?: string;
  season?: string;
  religion?: string;
  city?: string;
  style?: string;
  time?: string;
  local?: string;
  budget?: number;
  localHoneyMoon?: string;
  userId?: number;
}

export {
  createMarriageService,
  updateMarriageService,
  getMarriagesByUserService,
  deleteMarriageService,
};
