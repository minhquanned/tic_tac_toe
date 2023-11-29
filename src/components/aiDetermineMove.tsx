import { difference } from "lodash";
import { getRandomInt } from "./getRandomInt";
import { winPatten } from "./winPatten";

// Minimax algorithm
export function aiDetermineMove(board: any, player: any) {
    const aiMoves: any[] = []; // Take all AI's boxes
    const humanMoves: any[] = []; // take all human's moves

    board.forEach((box: any, index: any) => {
        if (box === player.ai) {
            aiMoves.push(index);
        }
        if (box === player.human) {
            humanMoves.push(index);
        }
    });
    // If can win, then win
    for (let pattern of winPatten) {
        const winPositions = difference(pattern, aiMoves);
        if (winPositions.length === 1) {
            const winPos = board[winPositions[0]];
            if (!winPos) {
                return winPositions[0];
            }
        }
    }

    // If cannot win, then block
    for (let pattern of winPatten) {
        const winPositions = difference(pattern, humanMoves);
        if (winPositions.length === 1) {
            const winPos = board[winPositions[0]];
            if (!winPos) {
                return winPositions[0];
            }
        }
    }

    // If cannot block, take the middle
    const centerSquare = 4;
    if (!board[centerSquare]) {
        return centerSquare;
    }

    // If cannot do anything, then random
    let randomPos = getRandomInt(0, 9);
    while (board[randomPos]) {
        randomPos = getRandomInt(0, 9);
    }
    return randomPos;
}
