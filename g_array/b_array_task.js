// 10~1까지 Array 객체에 담은 후 짝수만 출력
// const datas = new Array(10).fill(0).map((_, i) => 10 - i);
// const evens = datas.filter((data) => data % 2 === 0);
// console.log(evens);

// 1~100까지 Array 객체에 담은 후 3의 배수만 추출 후 출력
// const datas = new Array(100).fill(0).map((_, i) => i + 1);
// const timesOfThree = datas.filter((data) => data % 3 === 0);
// console.log(timesOfThree);

// // 한글을 숫자로(삼사칠구 -> 3479)
// const changeNumber = (...input) => {
//     const hangul = [..."공일이삼사오육칠팔구"];
//     return parseInt(input.map((c) => hangul.indexOf(c)).join(""));
// };

// // ...문자열 또는 ...Array객체: unpacking 문법,
// // 모든 값을 각각 분리할 때 사용한다.
// const test = "ABC";
// console.log(...test);

// const number = changeNumber(..."삼사칠구");
// console.log(number + 10);

// 숫자를 한글로(3479 -> 삼사칠구)
const hangul = [..."공일이삼사오육칠팔구"];
const input = "3479";
const target = [...input];

const result = target.map((number) => hangul[number]).join("");
console.log(result);

// ★ special
// new Array(10).fill(0).forEach(() => {datas[i] = i + 1}) : 리턴 없음, 반복문, 기존 객체
// new Array(10).fill(0).map(() => i + 1): 리턴 있음, 반복문 + 수정(리턴값), 새로운 객체
// new Array(10).fill(0).filter(() => true): 추출됨
// new Array(10).fill(0).filter(() => false): 추출안됨
