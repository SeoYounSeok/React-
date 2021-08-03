import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();
  console.log(state);
  return (
    <TodoListBlock>
      <TodoItem
        text="커플 : 커플 캘린 더 생성 및 내 커플 자랑 하기"
        done={false}
      />
      <TodoItem
        text="가족 : 가족들을 위한 가족 캘린더 올려서 보내기"
        done={false}
      />
      <TodoItem
        text="학교 평가판(익명): 페이스 페인팅 누군가 적어서 메모장 만들고 마인드맵으로 만들기"
        done={false}
      />
      <TodoItem text="강아지 고양이 크롤링 방식으로 진행하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
