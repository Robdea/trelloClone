import * as userFunctionApi from "./ownApi/boardsServices.own";
import * as userFunctionSupabase from "./supabase/boardsServices.supabase";

const backend = import.meta.env.VITE_BACKEND || "supabase";

export const boardServices = backend === "supabase" ? userFunctionSupabase : userFunctionApi;
