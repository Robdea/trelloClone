import { create } from "zustand";
import type {User} from "../lib/user.type"
import { register, signInUser } from "../api/services/userServices";

interface UserProps {
    userData: User | null,
    loading: boolean,
    error: string | null,
    registerUser: (data: { email: string; password: string; username: string })=> Promise<void>,
    signInUser: (data: { email: string; password: string })=> Promise<void>,
}

export const useUser = create<UserProps>((set) =>({
    userData: null,
    loading: false,
    error: null,
    registerUser: async (data) =>{
       set({loading: true, error: null});
       try {
            await register(data);
            set({loading: false});

       } catch (err: unknown) {
            let errorMessage = "An error occurred";
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            set({error: errorMessage, loading: false})
       }
    },
    signInUser: async (data) => {
      set({loading: true, error: null});
       try {
            const userSignIn = await signInUser(data);
            set({userData: userSignIn, loading: false});
       } catch (err: unknown) {
            let errorMessage = "An error occurred";
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            set({error: errorMessage, loading: false})
       }    
    }
}))
