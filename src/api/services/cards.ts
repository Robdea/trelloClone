import { supabase } from "../clients/supabaseClient";

const TABLE = "cards"

async function createCard(listId: string, title: string, position: number) {
    const {data, error} = await supabase
    .from(TABLE)
    .insert([{list_id: listId, title: title, position: position}])
    .select()

    if(error){
        console.error("Error al crear la lista",error);
        return null
    }
    return data[0]
}

async function getCardsByListId(listId: string) {
    const {data, error} = await supabase
    .from(TABLE)
    .select("*")
    .eq("list_id", listId)
    .order("position", {ascending: true});

    if (error) {
        console.error("ERROR Al obtener las listas",error);
        return null
    }
    return data
}

export {createCard, getCardsByListId}