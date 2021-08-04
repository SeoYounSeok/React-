import React, { useState, useEffect } from "react";
import axios from "axios";

// 함수형 컴포넌트의 경우에는, 대문자로 시작
function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // try/catch 는 훌륭하지만 명령형 코드에서만 동작합니다.

  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      // Loading 상태를 제일 먼저 보여준다.
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); // response.data 안에 들어가 있다.
      console.log("response.data = " + response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
}
export default Users;
