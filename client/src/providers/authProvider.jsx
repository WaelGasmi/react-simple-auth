import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { authApi } from "../api/authApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { loginApi, signupApi, logoutApi, checkMe } = useMemo(
    () => authApi(),
    []
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await checkMe();
        if (data?.user?.username) {
          setUser(data.user.username);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [checkMe]);

  const login = async ({ username, password }) => {
    const data = await loginApi(username, password);
    if (data && data.username) {
      setUser(data.username);
      return true;
    }
    return false;
  };

  const signup = async ({ username, password }) => {
    const data = await signupApi(username, password);
    if (data) return true;
    return false;
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
