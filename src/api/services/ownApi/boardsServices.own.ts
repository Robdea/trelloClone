import { Board } from "../../../lib/board.type";
import { api } from "../../clients/ownApiClient";

async function createBoard(board: {name:string}){
    const {name} = board
    const {data} = await api.post("/boards",{
        name
    })
    return data;
}
async function getAllBoardByUser(){
    const {data} = await api.get<Board[]>("/boards")
    return data;
}
async function updateName() {

}
async function deleteBoard() {

}

export {
    createBoard,
    getAllBoardByUser,
    updateName,
    deleteBoard
}