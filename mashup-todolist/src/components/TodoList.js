import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="우림이 놀아주기" done={true} />
      <TodoItem text="우리,보리 맞나?... 반려동물과 놀아주기" done={true} />
      <TodoItem text="CGV 가짜사나이 영화 윤석이 보여주기(여친 없으니 혼자볼꺼임)" done={false} />
      <TodoItem text="1시간 걸릴줄 알았는데 3시간 넘게 걸려서 개빡치네" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;