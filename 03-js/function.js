// 1. 명명함수(Function Declarations) : function 키워드로 선언하는 방식 (호이스팅 발생)
function 함수이름(params) {
  (console, log("이름 있는 함수"));
}

// 2. 익명함수(Function Expressions) : 변수에 할당하는 방식
// 2-1.표현식함수
const 표현식함수 = function (m1,m2) {
  document.write(`오늘점심은 : ${m1}과 ${m2}야` )
};
표현식함수('떡볶이','순대');
// 2-2.즉시실행함수(IIFE, Immediately Invoked Function Expression) : 선언과 동시에 실행하는 방식
// 2-3.화살표함수(Arrow Functions) : 축약표기방식
