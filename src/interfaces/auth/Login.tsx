import { useEffect, useState } from "react";
import { useUser } from "../../storage/storageUser";
import { useNavigate} from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, userData, loading, signInUser} = useUser();

  const navigate = useNavigate();

  async function handleSignUpUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signInUser({email, password})
  }

  useEffect(() => {
    if(userData){
      navigate(`${userData.user.username}/boards`)
    }
  }, [userData]);

  return (
    <div className="h-full flex justify-center bg-white-100">
      <div className="bg-white flex flex-col self-center p-5 rounded-xs shadow-2xs">
        <h1 className="text-center text-3xl font-medium mb-2">TrelloClone</h1>
        <form className="flex flex-col gap-1" onSubmit={handleSignUpUser}>
          <h2>Inicia sesión para continuar</h2>
          <label htmlFor="email">Correo o nombre de usuario</label>
          <input
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            />
          
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            />
            <button className="bg-blue-600 text-white py-2" type="submit">
            { loading ? "Cargando...": "Sign in"}
            </button>
            {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
}
