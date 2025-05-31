import React, { useEffect, useState } from "react"
import "./Tic-Tac-Toe.css"

function Square({ value, onClick }) {

    return <button onClick={onClick} className="square">{value}</button>
}

export default function Game() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function getWinner() {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7]
        ];


        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i];

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) 
                {
                    return squares[x];
                }
            }
            return null;
        }

        function handelClick(getCurrentSquares) {
            let cpySquares = [...squares];
            if (getWinner(cpySquares) || cpySquares[getCurrentSquares]) return;
            cpySquares[getCurrentSquares] = isXTurn ? "X" : "O";
            setIsXTurn(!isXTurn);
            setSquares(cpySquares);
        }

        useEffect(() => {
            if (!getWinner(squares) && squares.every(item => item !== '')) {
                setStatus("This is a Draw. Restart THe game")
            } else if (getWinner(squares)) {
                setStatus(`Winner is ${getWinner(squares)}`)
            } else {
                setStatus(`Next player is ${isXTurn ? "X" : "O"}`)
            }
        }, [squares, isXTurn])


        function handelRestart(){
            setIsXTurn(true)
            setSquares(Array(9).fill(""));
        }

        return (
            <div className="tic-tac-toe">
                <div className="row">
                    <Square value={squares[0]} onClick={() => handelClick(0)} />
                    <Square value={squares[1]} onClick={() => handelClick(1)} />
                    <Square value={squares[2]} onClick={() => handelClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => handelClick(3)} />
                    <Square value={squares[4]} onClick={() => handelClick(4)} />
                    <Square value={squares[5]} onClick={() => handelClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => handelClick(6)} />
                    <Square value={squares[7]} onClick={() => handelClick(7)} />
                    <Square value={squares[8]} onClick={() => handelClick(8)} />
                </div>
                <h1>{status}</h1>
                <button onClick={handelRestart}>Restart</button>
            </div>
        )
    }