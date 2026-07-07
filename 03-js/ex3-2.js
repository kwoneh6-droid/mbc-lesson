 console.log(1+1);
        console.log("자바스크립트를 넣는법");
       document.write(`<h1 class=btn>click</h1>`)
       document.querySelector('.btn').onclick=function(){
        // 여기에 쓰는건 실행문
        document.querySelector('.text').style.color='blue';
        document.querySelector('body').style.background='yellow'
       
       }
    //    값을 만들어내는 코드조각=>표현식
    // 기존서비스와의 호환성->AI는 이것까진 판단하지 못함 이걸 판단하는게 인간의 몫이 될거임