import { AxiosResponse } from "axios";
import { Alert } from "react-native";
import api from "../factory/api";
import { UserRegister } from "./types/IUserService";

interface ResponseProps extends AxiosResponse {
  data: {
    token: string;
  };
}

export async function postRegisterUserAsync(user: UserRegister) {
  try {
    const response: ResponseProps = await api.post("/register", user);
    return response.data;
  } catch (err) {
    Alert.alert("Credenciais inválidas");
    return false;
  }
}
