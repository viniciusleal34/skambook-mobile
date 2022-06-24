import React from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseUrl from "../config/baseUrl";

const AUTHORIZATION = "Authorization";

const API = () => {
  const api = axios.create({ baseURL: baseUrl.URL });

  api.interceptors.request.use(async (config: any) => {
    const token = await AsyncStorage.getItem("@CodeApi:token");

    const headerConfig = config;
    if (token) headerConfig.headers[AUTHORIZATION] = `${token}`;

    return headerConfig;
  });

  return api;
};

export default API();
