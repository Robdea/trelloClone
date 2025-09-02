import { supabase } from "../../clients/supabaseClient";

const TABLE = "boards"

async function createBoard(board: {name: string, userId?:string}) {
    const {name, userId} = board
    
    const {data, error} = await supabase.from(TABLE)
    .insert([
        {owner_id: userId, name:name }
    ])
    .select()
    if(error){
        console.error(error);
        return null
    }
    console.log("Se ha creado el tablero", data);
    return data[0]
}

async function getAllBoardByUser() {
    const {data, error} = await supabase
    .from(TABLE)
    .select("*")
    .eq("owner_id", supabase.auth.user()?.id)
    if (error) {
        console.error(error);
        return
    }
    console.log("Dato obtenidos", data);
    return data
}

async function updateName(newName: string, id: string) {
    const {data, error} = await supabase
    .from(TABLE)
    .update([
        {name: newName}
    ])
    .eq("id", id)
    .select()
    if(error){
        console.error(error);
        return null
    }
    console.log("Se actualizo", data);
    return data[0]
}

async function deleteBoard(id:string) {
    const {data, error} = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id)

    if(error) console.error(error);
    console.log("Se ha eliminado el tablero xd", data);
}

export{createBoard, updateName, deleteBoard, getAllBoardByUser}
