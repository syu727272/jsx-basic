# JSXの実践例

このドキュメントでは、JSXを使った実践的な例を紹介します。これらの例を通じて、JSXの基本的な使い方からより高度な使い方までを学ぶことができます。

## 基本的なコンポーネント

### シンプルな挨拶コンポーネント

```jsx
import React from 'react';

function Greeting({ name }) {
  return <h1>こんにちは、{name}さん！</h1>;
}

// 使用例
// <Greeting name="田中" />
```

### 複数の要素を持つコンポーネント

```jsx
import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatarUrl} alt={`${user.name}のアバター`} />
      <h2>{user.name}</h2>
      <p>メール: {user.email}</p>
      <p>登録日: {user.registeredDate}</p>
    </div>
  );
}

// 使用例
// const user = { 
//   name: '山田太郎', 
//   email: 'yamada@example.com', 
//   registeredDate: '2023-04-01',
//   avatarUrl: 'https://example.com/avatars/yamada.jpg'
// };
// <UserProfile user={user} />
```

## 条件付きレンダリング

### 三項演算子を使用した条件付きレンダリング

```jsx
import React from 'react';

function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn 
        ? <button>ログアウト</button> 
        : <button>ログイン</button>}
    </div>
  );
}

// 使用例
// <LoginStatus isLoggedIn={true} />
```

### 論理AND演算子（&&）を使用した条件付きレンダリング

```jsx
import React from 'react';

function NotificationBadge({ count }) {
  return (
    <div>
      <span>通知</span>
      {count > 0 && (
        <span className="badge">{count}</span>
      )}
    </div>
  );
}

// 使用例
// <NotificationBadge count={5} />
```

### 条件付きスタイリング

```jsx
import React from 'react';

function StockStatus({ inStock }) {
  return (
    <div className={inStock ? 'in-stock' : 'out-of-stock'}>
      {inStock ? '在庫あり' : '在庫切れ'}
    </div>
  );
}

// 使用例
// <StockStatus inStock={true} />
```

## リストのレンダリング

### シンプルなリスト

```jsx
import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// 使用例
// const todos = [
//   { id: 1, text: '牛乳を買う' },
//   { id: 2, text: 'レポートを提出する' },
//   { id: 3, text: 'ジムに行く' }
// ];
// <TodoList todos={todos} />
```

### より複雑なリスト

```jsx
import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="price">¥{product.price.toLocaleString()}</div>
          <button>カートに追加</button>
        </div>
      ))}
    </div>
  );
}

// 使用例
// const products = [
//   { 
//     id: 1, 
//     name: '高級腕時計', 
//     description: '上質なレザーバンドとシンプルなデザイン', 
//     price: 25000, 
//     image: '/images/watch.jpg' 
//   },
//   // ... 他の商品
// ];
// <ProductList products={products} />
```

## イベント処理

### クリックイベントの処理

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

// 使用例
// <Counter />
```

### フォーム入力の処理

```jsx
import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`名前: ${name}\nメールアドレス: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

// 使用例
// <SimpleForm />
```

## コンポーネントの組み合わせ

### 小さなコンポーネントの組み合わせ

```jsx
import React from 'react';

function Header({ title }) {
  return <header><h1>{title}</h1></header>;
}

function Footer({ copyright }) {
  return <footer>&copy; {copyright}</footer>;
}

function Content({ children }) {
  return <main>{children}</main>;
}

function Page({ title, copyright, children }) {
  return (
    <div className="page">
      <Header title={title} />
      <Content>{children}</Content>
      <Footer copyright={copyright} />
    </div>
  );
}

// 使用例
// <Page title="ホームページ" copyright="2023 Example Inc.">
//   <p>これはページのコンテンツです。</p>
// </Page>
```

## まとめ

JSXは、HTML風の構文でReactのコンポーネントを作成できる強力な機能です。このドキュメントで紹介した例を参考に、様々なUIコンポーネントを作成してみてください。
