// ==: 값만 비료
// ===: 값과 타입 비교

let data1 = 1;
let data2 = "1";

console.log(data1 == data2); //값만 비교
console.log(data1 === data2); // 타입까지 비교

// || : 앞에 있는 값이 false 값이라면, 뒤에 있는 값으로 사용된다.
// faluse로 취급되는 값: "", null, 0, undefined

let value;
let data = value || 10;

console.log(data);

// &&: 앞의 조건식이 false라면, false이고
// 앞의 조건식이 true라면 뒤에 적은 값으로 대체된다.
let check = false;
console.log(check && 10);

// 삼항연산자
let condition = 10 > 11;
let result = condition ? 10 : 11;
console.log(result);
