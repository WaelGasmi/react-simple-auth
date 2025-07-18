import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(form);
    if (success) {
      alert("login success");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
