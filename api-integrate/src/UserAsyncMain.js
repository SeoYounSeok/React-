import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

// 라우터의 종류 . 1. 리액트 라우터 2. 리치 라우터 , 3. Next.js
// BrowserRouter - 새로 고침 시, 깜빡임 없이 처리하게 해준다 .. 뭐 라우터 부분에서 작성할 것입니다.
export default UscderAsyncMain;
