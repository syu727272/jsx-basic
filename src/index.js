import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import logo from './logo.svg';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <p>Reactをはじめよう！</p>
    <p>JSXの基本</p>
  </div>
);

// root.render(
//   <React.Fragment>
//     <p>Reactをはじめよう！</p>
//     <p>JSXの基本</p>
//   </React.Fragment>
// );

// root.render(
//   <>
//     <p>Reactをはじめよう！</p>
//     <p>JSXの基本</p>
//   </>
// );

// const tag = <img src={logo} />;

// const tag = (
//   <label htmlFor="name" className="sky">
//     <input id="name" type="text" tabIndex="0" /></label>
//   );

// const tag = (
//   <div>
//     {/* コメントです */}
//     <p
//       // コメントです。
//       /* コメントです。
//       コメントです */
//     >こんにちは、世界！</p>
//   </div>
//   );

// root.render(
//   <div>{tag}</div>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
