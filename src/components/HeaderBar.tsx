import { useState } from "react";
import { useBoard } from "../hooks/useBoard"

export default function HeaderBar() {
    const {createBoard} = useBoard();
    const [showDash, setShowDash] = useState(false);
    const [title, setTitle] = useState("");

    function searchBoards() {
        
    }

    async function handleCreateBoard(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(title.trim() === "") return
        await createBoard.mutate(title.trim())
        console.log("Creado");
    }

  return (
   <header className="flex justify-between py-2 px-3 bg-primary-blue items-center border-b-1 border-semi-gray-200">
        <h1 className="text-white">TrelloClone</h1>
        <div className="flex items-center">

            <form className="text-semi-gray" onSubmit={searchBoards}>
                <div>
                    <input placeholder="Buscar" type="text" />
                </div>
            </form>

            <div className="relative">
                <button 
                onClick={() => setShowDash((prev) => prev = !prev)}
                className="bg-blue-400 rounded-xs py-1.5 px-3">Crear</button>
                {
                   showDash && (
                    <div className="absolute bg-amber-200 top-10">
                        <header className="flex">
                            <h2>Crear tablero</h2>
                            <button>quiet</button>
                        </header>
                        <form onSubmit={handleCreateBoard} className="flex flex-col">
                            <label htmlFor="title">Título del tablero</label>
                            <input 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text" 
                            id="title" />
                            <button 
                            className="bg-blue-400">Crear</button>
                        </form>
                    </div>
                   )    
                }
            </div>
        </div>
        <div></div>
    </header>
  )
}
