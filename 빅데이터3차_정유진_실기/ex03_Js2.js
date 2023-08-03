  // 1. span 요소 가져오기
  let spanVal = document.getElementById('spanTag')

  // 2. +1 증가 버튼 클릭 시 -> 숫자 증가
  const increase = () => {
      console.log('plus');
      spanVal.innerText = Number(spanVal.innerText) + 1;
  }
  // 3. -1 버튼 클릭 시 -> 숫자 감소
  const decrease = () => {
      console.log('minus');
      let spanNum = Number(spanVal.innerText);
      // 4. 0 이하에서는 감소 x
      if (spanNum > 0) {
          spanVal.innerText = spanNum - 1;
      }
  }

  const reset = () => {
      console.log('reset');
      let spanNum = Number(spanVal.innerText);
      spanVal.innerText = 0;
  }