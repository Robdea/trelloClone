import * as userFunctionApi from "./ownApi/userServices.own";
import * as userFunctionSupabase from "./supabase/userServices.supabase";

const backend = import.meta.env.VITE_BACKEND || "supabase";

export const userService = backend === "supabase" ? userFunctionSupabase : userFunctionApi;
