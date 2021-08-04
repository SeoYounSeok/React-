// 데이터를 요청해야 할 때마다 리듀서를 작성하는 것은 번거로운 일이기 때문에 반복되는 코드를 작성하는 대신에
// 커스텀 훅을 만들어서 요청 상태 관리 로직을 쉽게 재사용하는 방법
// 하나 모듈 생성하고 주고 받는 식인것 같아.
// 새로운 파일 하나 만든다고 달라지는 건 없음.
// useReducer 도 동일하게, LOADING, SUCCESS, ERROR 액션에 따라 다르게 처리.

// 리듀서는 동일하게 state, action 두 가지 입력 변수를 가지고 진행
// useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.
// useCallback  = 메모리제이션된 함수를 반환한다는 문장이 핵심

import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
