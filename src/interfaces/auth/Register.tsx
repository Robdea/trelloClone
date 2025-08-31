import { useState } from 'react'
import { useUser } from '../../storage/storageUser';

export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const {error, loading, registerUser, userData} = useUser();

    async function handleRegisterUser(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      await registerUser({email, password, username})
      console.log("Datos", userData);
    }

  return (
    <div>
      <h1>Register to continue</h1>
      <form 
        onSubmit={handleRegisterUser}
      >
        <input
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          placeholder='Username'
          onChange={e => setUsername(e.target.value)}
          value={username}
          type="text"
        />
        <input
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button type="submit">
          {loading ? "Registering..." : "Register"}  
        </button>  
        {error && <p style={{color: "red"}}>{error}</p>}
      </form>
    </div>
  )
}
