import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { authApi } from "../api/authApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { loginApi, logoutApi, checkMe } = authApi();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await checkMe();
      if (data && data.user) setUser(data.user);
    };

    fetchUser();
  }, [checkMe]);

  const login = async ({ username, password }) => {
    const data = await loginApi(username, password);
    if (data && data.user) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
