import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

// exact={true} 경로 상에서 문제가 생기는 점을 방지하기 위해서 사용
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

// 대부분 <Header> <body> <footer> 형식으로 되어 있다고 들었다.

export default App;
