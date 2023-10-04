import React, { useState } from "react";

export default function Board() {
  // 各マスの状態を管理するための配列を作成
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>

    </React.Fragment>
  );
}

function Square({ value }) {
  return (
    <button className="square">
      {value}
    </button>
  );
}