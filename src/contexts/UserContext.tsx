import React, { createContext, useCallback, useEffect, useState } from "react";

interface AuthContextData {
  userData: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
