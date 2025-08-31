import { createClient } from "@supabase/supabase-js"


const supabaseUrl = import.meta.env.VITE_URL;
console.log("here", supabaseUrl);
const supabaseApiKey = import.meta.env.VITE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseApiKey, {
    auth: {
        persistSession: true,
        storage: localStorage
    }
});

export default {
    registerUser: async (user:{email: string, password: string, username: string}) => {
        const {email, password, username} = user
        
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (error) {
            console.error('Error al registrarse:', error.message);
            return;
        }
    
        // Problema: estás redeclarando 'data' y 'error' en el siguiente bloque
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
    },
    signInUser: async (user: {email: string, password: string}) => {
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
}


