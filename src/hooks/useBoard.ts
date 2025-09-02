import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { boardServices } from "../api/services/board";
import type { Board } from "../lib/board.type";

export function useBoard() {
    const qc = useQueryClient();

    const createBoard = useMutation({
        mutationFn: (name: string) => boardServices.createBoard({name}),
        onSuccess: () => qc.invalidateQueries({queryKey: ["boards"]})
    });

    const getAllBoards = useQuery<Board[]>({
        queryKey: ["boards"],
        queryFn: async () => (await boardServices.getAllBoardByUser()) ?? [],
        placeholderData: [],
    });
    return {createBoard, getAllBoards}
};
