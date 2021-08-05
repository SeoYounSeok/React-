import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

// <Route 에 보면, 두번째에 component 가 아니라 render 이 들어가는 경우를 볼 수 있음
// 이 때는 JSX 자체를 렌더링 하는 경우임 <div> ~~~~

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록 :</h3>
      <ul>
        <li>
          <Link to="/profiles/younseok">서코</Link>
        </li>
        <li>
          <Link to="/profiles/jinwoo">지누정</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
