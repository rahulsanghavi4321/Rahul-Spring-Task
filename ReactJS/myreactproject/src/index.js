import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
     </>
);
// JSX->using expression
// ---------------------
// const name = "Rahul";
 
//  const element = (
//      <h1>
//          Hello,
//          {name}.Welcome to Tops Technologies...
//      </h1>
// );
// ReactDOM.render(element, document.getElementById("root"));

// JSX->using expression using ternary op
// ---------------------
// let i = 1;
 
// const element = (
//     <h1>{i == 1 ? "Hello World!" : "False!"} </h1>
// );
// ReactDOM.render(element, document.getElementById("root"));


// JSX->using attribute
// ---------------------

// const element = (
//   <div>
//       <h1 className="hello">Hello Tops</h1>
//       <h2 data-sampleAttribute="sample">
//           Custom attribute for Tops Technologies
//       </h2>
//   </div>
// );
// ReactDOM.render(element, document.getElementById("root"));


// JSX->using wrapping element or children in jsx
// ---------------------
// const element = (
//   <div>
//       <h1>This is Heading 1 </h1>
//       <h2>This is Heading 2</h2>
//       <h3>This is Heading 3 </h3>
//   </div>
// );
// ReactDOM.render(element, document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
