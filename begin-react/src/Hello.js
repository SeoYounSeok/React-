import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    // True , False 를 나타내는 가장 기본적인 방법은 삼항 연산자
    // {/* { isSpecial ? <b>*</b> : null } */}
    // 밑에의 경우에는 굉장히 간단하기 때문에 단축 평가 논리 계산법을 사용!
    
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;