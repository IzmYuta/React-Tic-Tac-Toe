import React, { useState } from "react";

// App.jsではコンポーネントを作成している
// コンポーネントとは、ユーザーインターフェースを構成するための部品のようなもの
// コンポーネントでは、UI要素のレンダリング、イベントの処理、状態の管理などを行う

// exportでコンポーネントを外部のファイルから読み込めるようにする
// defaultで宣言しているものはメイン関数として扱われる
export default function Board() {
  // JSX要素と呼ばれる、HTMLタグとJavaScriptのコードを組み合わせたものを返す
  // 複数のJSX要素を返すときは、フラグメントを使う
  // react nativeでは短縮系の<>は使えない
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
}

function Square() {
  // useStateを使うことで、コンポーネントの状態を記憶することができる
  // useStateの引数はvalueの初期値(=null)となる
  const [value, setValue] = useState(null);
  function handleClick() {
    // setValueを使うことで、valueの値を変更することができる
    setValue("X");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}