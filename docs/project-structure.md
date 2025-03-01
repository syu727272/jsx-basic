# プロジェクト構造

このプロジェクト「jsx-basic」は、Create React Appを使用して作成された基本的なReactアプリケーションです。JSXの基本を学ぶためのシンプルな構造になっています。

## ディレクトリ構造

```
jsx-basic/
├── README.md                 # プロジェクトの説明やスタートガイド
├── package.json              # 依存関係やスクリプトの設定
├── package-lock.json         # 依存関係の固定バージョン
├── .gitignore                # Gitの除外設定
├── public/                   # 静的ファイル
│   ├── favicon.ico           # ファビコン
│   ├── index.html            # HTMLテンプレート
│   ├── logo192.png           # ロゴ画像
│   ├── logo512.png           # 大きいロゴ画像
│   ├── manifest.json         # PWAマニフェスト
│   └── robots.txt            # クローラー設定
├── src/                      # ソースコード
│   ├── App.css               # Appコンポーネントのスタイル
│   ├── App.js                # メインのAppコンポーネント
│   ├── App.test.js           # Appコンポーネントのテスト
│   ├── index.css             # グローバルスタイル
│   ├── index.js              # エントリーポイント
│   ├── logo.svg              # Reactロゴ
│   ├── reportWebVitals.js    # パフォーマンス計測
│   └── setupTests.js         # テスト設定
└── docs/                     # ドキュメント
    ├── jsx-basics.md         # JSXの基本解説
    └── project-structure.md  # プロジェクト構造の説明（このファイル）
```

## 重要なファイル

### public/index.html
アプリケーションのHTMLテンプレートです。ここでは`<div id="root"></div>`がReactアプリケーションのマウントポイントとなっています。

### src/index.js
アプリケーションのエントリーポイントです。ReactDOMを使用してAppコンポーネントをDOMにレンダリングします。

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### src/App.js
アプリケーションのメインコンポーネントです。JSXを使用してUIを定義しています。

```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

## 開発プロセス

このプロジェクトでは、主に以下のファイルを編集してJSXの基本を学びます：

1. `src/App.js` - メインのコンポーネントを編集してJSXの構文を試す
2. `src/App.css` - UIのスタイリングを変更する
3. 必要に応じて新しいコンポーネントファイルを作成（例：`src/components/MyComponent.js`）

## 実行方法

開発サーバーを起動するには：

```bash
npm start
```

これにより、ブラウザで[http://localhost:3000](http://localhost:3000)が開き、アプリケーションが表示されます。
