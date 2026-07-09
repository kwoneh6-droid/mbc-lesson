// 1. 명명함수(Function Declarations) : function 키워드로 선언하는 방식 (호이스팅 발생)
function 함수이름(params) {
  (console, log("이름 있는 함수"));
}

// 2. 익명함수(Function Expressions) : 변수에 할당하는 방식
// 2-1.표현식함수
const 표현식함수 = function (m1, m2) {
  document.write(`오늘점심은 : ${m1}과 ${m2}야<br>`);
};
표현식함수("떡볶이", "순대");
표현식함수("라면", "김밥");
// 2-2.즉시실행함수(IIFE, Immediately Invoked Function Expression) : 선언과 동시에 실행하는 방식
(function (a, b) {
  document.write(`<h1>즉시실행함수</h1><hr>${a + b}<hr>`);
})(1, 2);
// 2-3.화살표함수(Arrow Functions) : 축약표기방식/ 익명함수에만 사용가능 이름이 없이 표현식에 변수를 넣는형태는 가능

// const 화살표함수 = function () {
// const 화살표함수 = () => { //1단변신 function생략
const 화살표함수 = () =>
  //2단변신 {}도 생략가능

  document.write(`<h1>화살표함수</h1> <br>`);
화살표함수();

const sum = (a, b) =>{
  console.log(a + b);
  return;
};

sum(50, 10);