# JSXの基本

## JSXとは
JSX（JavaScript XML）は、Reactで使用されるJavaScriptの構文拡張です。HTMLのように見えますが、実際にはJavaScriptのコードに変換されます。JSXを使用することで、UIの構造をより直感的に記述できます。

## JSXの主な特徴

### 1. HTMLに似た構文
JSXはHTMLに似た構文を持っていますが、いくつかの違いがあります：

```jsx
// HTML風の構文でUI要素を記述できる
const element = <h1>Hello, world!</h1>;
```

### 2. JavaScriptの式を埋め込む
中括弧 `{}` を使ってJavaScriptの式を埋め込むことができます：

```jsx
const name = 'ユーザー';
const element = <h1>こんにちは、{name}さん</h1>;
```

### 3. 属性の使用
HTML属性と同様に属性を指定できますが、キャメルケースで記述します：

```jsx
// className はHTMLのclass属性に相当
const element = <div className="container">コンテンツ</div>;

// イベントハンドラもキャメルケース
const element = <button onClick={handleClick}>クリック</button>;
```

### 4. 子要素
JSXは子要素を持つことができます：

```jsx
const element = (
  <div>
    <h1>タイトル</h1>
    <p>段落</p>
  </div>
);
```

## JSXのコンパイル
JSXはBabelなどのツールによってReact.createElementの呼び出しに変換されます：

```jsx
// JSX
const element = <h1 className="greeting">Hello, world!</h1>;

// 変換後のJavaScript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

## JSXの注意点

### 1. 単一のルート要素
JSXのリターン値は必ず単一のルート要素である必要があります：

```jsx
// 正しい例
return (
  <div>
    <h1>タイトル</h1>
    <p>段落</p>
  </div>
);

// または React Fragmentを使用
return (
  <>
    <h1>タイトル</h1>
    <p>段落</p>
  </>
);

// 誤った例
return (
  <h1>タイトル</h1>
  <p>段落</p>
);
```

### 2. JSX内での条件分岐
JSXでは三項演算子や論理AND演算子を使って条件分岐を実現します：

```jsx
// 三項演算子による条件分岐
return (
  <div>
    {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
  </div>
);

// 論理AND演算子による条件付きレンダリング
return (
  <div>
    {unreadMessages.length > 0 && 
      <h2>未読メッセージが {unreadMessages.length} 件あります</h2>
    }
  </div>
);
```

### 3. JSXでのリスト表示
配列のmapメソッドを使用してリストをレンダリングします：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

## まとめ
JSXはReactの重要な部分であり、UIを宣言的に記述するための強力なツールです。HTMLに似た構文を持ちながら、JavaScriptの柔軟性を活かせるため、コンポーネントベースのUI開発に適しています。
