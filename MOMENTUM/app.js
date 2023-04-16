/*array = 그룹화 시킬 수 있음*/ 

const daysOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfweek[2]); // array 안에서 항목을 받아오는 것 [get item from array] 

// array에 하나 더 추가하는 방법 [add one more item to the array]

daysOfweek.push("sun"); // 내가 만든 변수 이름을 적고 .push()를 붙여주면 됨

console.log(daysOfweek);

// array의 목적은 하나의 변수 안에 데이터 list를 가지는 것임. 

/* list로 만들지 않으면 엄청나게 많은 변수를 만들어야하고 번거로움, 
    내가 사고 싶은 3번째 아이템이 뭔지 알고 싶다거나, 
    하나 더 추가하고 싶다 할 때 유용하게 사용할 수 있음

*/

const buySomething = ["apple", "potato","pizza"];

console.log(buySomething);

buySomething.push("eggs");

console.log(buySomething);


