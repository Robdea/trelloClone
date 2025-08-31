import { useState } from "react";
import { useUser } from "../../storage/storageUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, userData, loading, signInUser} = useUser();

  async function handleSignUpUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signInUser({email, password})
    console.log("Res", userData);
  }

  return (
    <div>
      <h1>Sign in to continue</h1>
      <form onSubmit={handleSignUpUser}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button type="submit">
          { loading ? "Cargando...": "Sign in"}
          </button>
      </form>
    </div>
  );
}
