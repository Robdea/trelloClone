import { supabase } from "../clients/supabaseClient"

const TABLE = "lists"

async function createList(boardId: string, title: string, position: number) {
    const {data, error} = await supabase
    .from(TABLE)
    .insert([{board_id: boardId, title: title, position: position}])
    .select()

    if(error){
        console.error("Error al crear la lista",error);
        return null
    }
    return data[0]
}

async function getListByBoardId(boardId: string) {
    const {data, error} = await supabase
    .from(TABLE)
    .select("*")
    .eq("board_id", boardId)
    .order("position", {ascending: true});

    if (error) {
        console.error("ERROR Al obtener las listas",error);
        return null
    }
    return data
}

// async function updatePosition(newPosition) {
    
// }


export {createList, getListByBoardId}




