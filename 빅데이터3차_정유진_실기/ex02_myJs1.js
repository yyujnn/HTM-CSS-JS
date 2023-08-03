 // 1. div 요소 각각 가져오기
 let redVal = document.getElementById('redBox');
 let greenVal = document.querySelector('#greenBox');
 let blueVal = document.getElementById('blueBox');
 let grayVal = document.querySelector('#grayBox');

 // 2. Margin 이동! 버튼 클릭
 const moveFunc = () => {
     greenVal.style.marginLeft = '100px';
     blueVal.style.marginLeft = '200px';
     grayVal.style.marginLeft = '300px';
 }

 // div 요소들 가져오기
 let divList = document.querySelectorAll('div');
 for(let i=0;i<divList.length;i++){
     console.log(divList[i]);
 }

 // 3. Border-radius 효과주기! 버튼 클릭
 const circleFunc = () => {

     divList.forEach(element=>{
         element.style.borderBottomLeftRadius='50%';
         element.style.borderTopRightRadius='50%';
     })

 }