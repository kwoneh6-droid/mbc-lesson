// 산술연산자
// `${}`
// function name(params){}
// !f

// console.log(`100+200=${100 + 200}`);
// console.log(`100-200=${100 - 200}`);
// console.log(`100/200=${100 / 200}`);
// console.log(`100**2=${100 ** 2}`);//곱하기를 2번쓰면 제곱
// console.log(`3%8=${3 % 8}`);

let t1 = "초코는";
let t2 = 8;
let t3 = "살";
let t4 = true;
let t5;
console.log(`자료형은: t1${typeof t1}/t2${typeof t2}/t3${typeof t3}/t4${typeof t4}/t5${typeof t5}`);
t5= t1+t2+t3;
console.log(`${typeof t5}///${t5}`)
// string+number는 string으로 타입이 변경
// 자바스크립트는 자료를 다룰때 동적타입언어라고 한다
// 개발자가 예측할수 없는 오류(버그)가 발생할 수 있음
// 그 버그를 찾아내는 것을 디버깅이라고 하는데 디버깅을 많이 해야함

// 위의 문제가 있어서 생겨난것이 타입스크립트(개발을 많이하는 디자이너가 된다면 필수) 타입스크립트 : 자바스크립트의 슈퍼셋->정적타입언어
// 단점은 초기개발속도가 저하됨(개발자의 개발지식과 숙련도가 필요함/코드가 길어짐-가장 안좋은점)BUT, 나중에 유지보수가 쉬워짐 ex)let t3 = "살";이 아니라 let t3:string = "살";이라고 적어야함.타입스크립트 확장자명은 .ts
let mon=100;
let text1="원"
let text2="일"
//mon+text1=
// 