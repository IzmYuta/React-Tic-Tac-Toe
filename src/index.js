import React, { StrictMode } from "react"; // Reactを読み込む
import { createRoot } from "react-dom/client"; // WebブラウザでReactをレンダリングするための関数を読み込む
import "./styles.css"; // CSSを読み込む

import App from "./App"; // App.jsで作成したコンポーネントを読み込む

// Reactをレンダリングする(index.htmlのid="root"の要素にAppコンポーネントをレンダリングする)
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);