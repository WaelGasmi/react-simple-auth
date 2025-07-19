import axios from "axios";

export const authApi = () => {
  const loginApi = async (username, password) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      );

      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutApi = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const signupApi = async (username, password) => {
    try {
      const res = axios.post("http://localhost:5000/auth/signup", {
        username,
        password,
      });

      return (await res).data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const checkMe = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/me", {
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return { loginApi, signupApi, logoutApi, checkMe };
};
