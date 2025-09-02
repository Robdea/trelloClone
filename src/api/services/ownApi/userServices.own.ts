import { api } from "../../clients/ownApiClient";

async function registerUser(user: {email: string, password: string, username: string}) {
    const {email, password, username} = user
    const {data} = await api.post("/users",{
        email, 
        password,
        username
    })
    return data;
}
async function signInUser(user: {email: string, password: string}) {
    const {email, password} = user
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const {data} = await api.post("/auth/login", formData, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    console.log("Respuesta", data);
    return data
}

export {registerUser, signInUser}

