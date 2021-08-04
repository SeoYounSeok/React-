// 파라미터  : /profiles/velopert
// 쿼리 : /about?details=true

// 일반적으로 파라미터는 특정 ID 나 이름을 가지고 조회를 할 때 사용
// 쿼리의 경우엔 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용

// URL Params

import React from "react";

const profileData = {
  younseok: {
    name: "서윤석",
    description: "Frontend Engineer @ Kakao",
  },
  jinwoo: {
    name: "정진우",
    description: "Backend Engineer @ JIN",
  },
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐, match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  // 값 확인
  console.log("match.params = " + match.params);
  console.log("username = " + username);
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
