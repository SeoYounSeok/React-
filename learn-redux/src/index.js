import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./modules";

// 아래 한줄이 뭔지는 몰라도 exercise 의 콘솔을 불러옴
//import "./exercise";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 리덕스를 사용하면서, 3가지 규칙이 있다.
// 1. 하나의 어플리케이션 안에는 하나의 스토어가 있습니다.
// 2. 상태는 읽기전용이다.
// 3. 변화를 일으키는 함수, 리듀서는 순수한 함수여야한다.

// - 이전상태와 , 액션상태를 파라미터로 받는다.
// - 이전의 상태는 건드리지 않고, 변화를 일으킨 새로운 객채 상태만 반환
// - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환

// now () 같은 것을 사용하기 때문에, 실행할 때마다 다른 값이 나올 수 있다. 그러한 작업은 순수하지
// 않으므로, 그런것들을 해결하기 위해서, 리듀서 함수의 바깥에서 처리해줘야한다. 리덕스 미들웨어를 사용한다.
