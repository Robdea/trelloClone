import { supabase } from "../../clients/supabaseClient";

async function registerUser(user:{email: string, password: string, username: string}) {
    const {email, password, username} = user
    
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });
    if (error) {
        console.error('Error al registrarse:', error.message);
        return;
    }
    const { data: userData, error: insertUserError } = await supabase
        .from("users")
        .insert([
            { id: data.user?.id, name: username }
        ]);

    if (insertUserError) {
        console.error("Error al insertarlo", insertUserError);
        return;
    }
    console.log("Registro exitoso", userData);

    return data
}

async function signInUser(user: {email: string, password: string}) {
    try {
        const {email, password} = user
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if(error){
            console.log("Error al tratar el usuario registro", error);
            return
        }
        console.log("Exito", data);
        return data
    } catch (error) {
        console.error(error);
        return null
    }
}

export {registerUser, signInUser}