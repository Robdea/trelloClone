import ownApiClient from "../clients/ownApiClient";
import supabaseClient from "../clients/supabaseClient";

const backend = import.meta.env.VITE_BACKEND || "supabase";

const client = backend === "supabase" ? supabaseClient : ownApiClient;

const register = async (user:{email: string, password: string, username: string}) => {
    return await client.registerUser(user);
}

const signInUser = async (user:{email: string, password: string}) => {
    return await client.signInUser(user);
}

export {register, signInUser}
