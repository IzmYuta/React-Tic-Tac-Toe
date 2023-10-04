import React from "react";

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
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </React.Fragment>
  );
}

// propsを利用して、コンポーネントに値を渡すことができる
// ここでは、valueという名前で値を渡している
function Square({ value }) {
  return <button className="square">{value}</button>;
}