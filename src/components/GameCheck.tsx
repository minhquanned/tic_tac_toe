import { winPatten } from "./winPatten";

export const isWon = (board: any) => {
    for (let i = 0; i < winPatten.length; i++) {
        let [a, b, c] = winPatten[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
};
export const isDraw = (board: any) => {
    return board.filter((box: any) => !box).length === 0;
};
