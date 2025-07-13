import api from "@/lib/axios";
import { Auth, GetAllAuthResponse } from "@/types/user";

export interface AuthPayload {
  email: string;
  password: string;
}

export const login = async (data: AuthPayload): Promise<GetAllAuthResponse> => {
  try {
    const res = await api.post<GetAllAuthResponse>(
      "/api/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error: any) {
    console.error(`Erreur lors de la connexion de l'utilisateur: ${error}`);
    throw new Error(error.response?.data?.message || "Erreur inconnue");
  }
};
