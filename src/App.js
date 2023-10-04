import React, { useState } from "react";

export default function Board() {
  // 各マスの状態を管理するための配列を作成
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    // squaresの配列をコピー
    const newSquares = squares.slice();
    // クリックしたマス目にXを代入
    newSquares[i] = "X";
    // squaresの配列を更新
    setSquares(newSquares);
  }
  return (
    <React.Fragment>
      <div className="board-row">
        {/* onSquareClick={handleClick(0)}のように呼び出すとうまく動作しない */}
        {/* これは、ボードのレンダリング時に、handleClick関数が呼び出されてしまい、状態変化によってレンダリングが無限に行われてしまうことが原因 */}

        <Square value={squares[0]} onSquareClick={handleClick(0)} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>

    </React.Fragment>
  );
}

// Boardコンポーネントから直接Squareコンポーネントを変更することはできないため、onSquareClickという名前で、関数をpropsとして渡す
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}