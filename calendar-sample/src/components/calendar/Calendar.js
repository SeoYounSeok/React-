import moment from 'moment';
import 'moment/locale/ko';

// 마지막 날 구하기 - dasyInMonth() , moment.js
const getDaysInMonth = (month, year) => {
   return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}

// 첫번째 요일 구하기 - 일요일 0
const getFirstWeekdayOfMonth = (month, year) => {
  return moment(
    `${month}-${year}`, 
    'MM-YYYY'
  ).startOf('month').weekday()
}

const getPrevMonthYear = (month, year) => {
  if (month === 1){
    return {
      month:12,
      year: year-1
    }
  }
  // 12월이 아니면,
  return {
    month: month -1,
    year
  }
}

const getNextMonthYear = (month, year) => {
  if (month !== 12) {
    return {
      month: month +1,
      year
    }
  }
  return {
    month : 1,
    year : year+1
  }
}

const getDatesInMonthDisplay = (month, year) => {
  // 마지막 날 구하기 - dasyInMonth() , moment.js
  const daysInMonth = getDaysInMonth(month, year);
  // 첫번째 요일 구하기 - 일요일 0 ~ 토요일 6 
  // moment weekday(), jscode getDay()
  const firstWeekday = getFirstWeekdayOfMonth(month, year);
  const result = [];

  // previous month event
  const prev = getPrevMonthYear(month, year);
  const preDaysInMonth = getDaysInMonth(
    prev.month,
    prev.year
  )
  // 이전 달 입력 prev
  for (let j = firstWeekday -1; j >= 0; j--){
    result.push({
      date: moment(`${prev.month}-${preDaysInMonth- j}-${prev.year}`, 'MM-DD-YYYY').toDate(),
      currentMonth : false
    })
  }
  // 이번 달 입력 current
  for (let i = 1; i <= daysInMonth; i++) {
    result.push({
      date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
      currentMonth : true
    })
  }
  // 다음 달 입력 next
  if(result.length < 42){
    const daysToAdd = 42 - result.length;
    const next = getNextMonthYear(month, year);
    for(let k = 1; k <= daysToAdd; k ++) {
      result.push({
        date: moment(`${next.month}-${k}-${next.year}`, `MM-DD-YYYY`).toDate(),
        currentMonth: false
      })
    }
  }
  return result;
}

export default getDaysInMonth;

// s
console.log(getDatesInMonthDisplay(8, 2021))


// 화면 하나를 공유해주는 느낌은 확실히 알겠다.
// 그러면 함수 공유는 어떤 식으로 해주는 가?
