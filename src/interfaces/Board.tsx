import { useBoard } from "../hooks/useBoard";
import type { Board } from "../lib/board.type";
import { Link } from "react-router";

export default function Board() {
  const {getAllBoards} = useBoard()
  
  const {data:boards, error, isLoading} = getAllBoards;
  
  if (isLoading) return <p>Cargando boards...</p>;
  if (error) return <p>Error al cargar boards</p>;

  return (
    <div className="text-white bg-primary-blue h-full">
        <div className="flex flex-wrap justify-center p-3 gap-2">
          {boards?.map((board: Board) => (
            <div className="flex flex-col shadow-2xs bg-amber-300 rounded-xl w-40" key={board.id}>
              <Link to={``}>
                <div className="flex-1">
                  <img src="" alt="not found" />
                </div>
                
                <div className="px-2 pb-2 pt-2 flex-2 flex items-end">
                  <span>
                    {board.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}
