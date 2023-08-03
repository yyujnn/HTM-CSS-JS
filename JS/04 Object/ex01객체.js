// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터

// 객체 구조 -> {Key1:value, Key2:value2, ...}
// Key : 객체의 속성(property)
// value : 속성의 값 / 기본자료형, 배열, 객체, 함수 ...

// 객체 생성
let obj = {};
console.log(obj);

// 속성 추가
obj.key1 = 'val1';
obj.key2 = 'val2';
console.log(obj);

let person = {
    "name": "정유진",
    age: 20,
    isPerson : true,
    intro : ()=>{
        console.log('여러분 금요일입니다 힘내세요😴');
    },
    favorite : {
        food : "pizza 🍕",
        drink : "coffee ☕"
    },
    smhrd : ['양세영', '임경남', '주미리', '박매일', '김은영']
}

// 객체 접근
console.log(person);
console.log('이름 :',person.name);
console.log('나이 :',person.age);
console.log('사람 :',person.isPerson);
person.intro()
console.log('좋아하는 음식 :',person.favorite.food);
console.log('담임선생님 :', person.smhrd[1],"👩🏻‍🏫");

// 속성 값 변경 및 추가 
person.name = '장원영';
console.log('이름 변경 :',person.name);
person.height = '180';
console.log('키 :', person.height);