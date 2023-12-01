import React, { useState } from "react";
import Board from "./Board";
import { aiDetermineMove } from "./aiDetermineMove";
import { isWon, isDraw } from "./GameCheck";

const messageStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: "40px",
    margin: "20px auto",
};

const buttonStyle = {
    width: "200px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    margin: "20px auto",
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isGameStop, setGameStop] = useState(false);
    const [message, setMessage] = useState("Tic - Tac - Toe");
    const player = {
        human: 'X',
        ai: 'O',
    }

    const restartButton = () => {
        setBoard(Array(9).fill(""));
        setGameStop(false);
        setMessage("Tic - Tac - Toe");
    }

    const handleClick = (pos: any) => {
        if (isGameStop) {
            return;
        }

        if (board[pos]) {
            return
        }

        const boardCopy = [...board];
        boardCopy[pos] = player.human;
        setBoard(boardCopy);

        // Check win or draw for human
        if (isWon(boardCopy)) {
            setMessage("X wins!")
            setGameStop(true);
            return;
        }

        if (isDraw(boardCopy)) {
            setMessage("Draw!")
            setGameStop(true);
            return;
        }

        // AI move
        setTimeout(() => {
            const aiIndex = aiDetermineMove(boardCopy, player);
            const boardCopy2 = [...boardCopy];
            boardCopy2[aiIndex] = player.ai;
            setBoard(boardCopy2);

            // Check win or draw for ai
            if (isWon(boardCopy2)) {
                setMessage("O wins!")
                setGameStop(true);
                return;
            }

            if (isDraw(boardCopy2)) {
                setMessage("Draw!")
                setGameStop(true);
                return;
            }
        }, 500);

    }

    console.log(board);
    return <div>
        <h3 style={messageStyle} >{message}</h3>
        <Board value={board} onClick={handleClick} />
        <button style={buttonStyle} onClick={restartButton}>Replay</button>
    </div>
};

export default Game;