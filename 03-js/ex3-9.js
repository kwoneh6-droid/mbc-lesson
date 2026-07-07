const x = 100;
const y = 87;
const add = x + y;
document.write("국어 점수 :" + x + "<br>");//옛날문법
document.write("수학 점수 :" + y + "<br>");
document.write("합계 :" + add + "<br>");
document.write("평균은 :");
document.write(add / 2);
document.write(`국어점수: ${x}<br>수학점수: ${y}<br>합계: ${add}<br>평균: ${add/2} `);//요즘문법
// AI에 시킬경우에 AI가 템플릿 리터럴로 짜지 않을경우에는 