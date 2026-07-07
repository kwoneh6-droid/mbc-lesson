// 두 수를 더하는함수
function addNum(num1, num2) {
    // sum은 지역변수 이므로 addNum 함수 밖에서 안읽힘
  const sum = num1 + mum2;
//   return으 ㄴsum의 값을 함수 밖으로 전달후 함수를 종료
  return sum;
}


document.write(`addNum함수 실행결과: ${addNum(1,2)}`);
