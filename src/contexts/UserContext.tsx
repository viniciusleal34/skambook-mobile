import React, { createContext, useCallback, useEffect, useState } from "react";
import { UserRegister } from "../services/types/IUserService";
import { postRegisterUserAsync } from "../services/userService";

interface AuthContextData {
  userData: any;
  createUserAsync(user: UserRegister): Promise<any>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<any>(null);

  const createUserAsync = async (user: UserRegister) => {
    try {
      const response = await postRegisterUserAsync(user);
      return response;
    } catch (err) {
      return err;
    }
  };

  return (
    <AuthContext.Provider value={{ userData, createUserAsync }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
