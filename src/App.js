import React, { useState } from "react";

export default function Board() {
  // 各マスの状態を管理するための配列を作成
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    // squaresの配列をコピー
    // これをしないと、squaresの配列自体が変更されてしまい、状態変化が検知されない
    // また、要件でロールバック機能が必要になった場合にも、このようにコピーを作成しておくと、簡単に実装できる
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
        {/* アロー関数を利用することで解決できる */}
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
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