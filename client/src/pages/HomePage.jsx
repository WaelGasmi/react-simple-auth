import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { logout, user } = useAuth();
  return (
    <div>
      <h1>HomePage</h1>
      <h3>Hi {user}</h3>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
