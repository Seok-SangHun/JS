// Array 객체
// let datas = [10, 4, 20, 3, 2];

// push(): 가장 마지막에 값 추가
// datas.push(3);
// console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 연결되어서 리턴
// console.log(datas.join(","));

// slice(begin, end): 원하는 부분을 추출하기 위해
// 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다
// console.log(datas.slice(1, 3));
// console.log(datas.slice(1));

// splice(index, count): 삭제
// console.log(datas.splice(1, 1));
// console.log(datas);

// splice(index, count, ...args): 교체
// console.log(datas.splice(1, 1, 200));
// console.log(datas);

// pop(): 마지막 요소 삭제
// const dataRemoved = datas.pop();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호 리턴.
// 못찾으면 -1 리턴
// const i = datas.indexOf(489);
// console.log(i);

// let datas = [10, 4, 20, 3, 2];
// const numbers = [...datas];
// console.log(numbers);

// const [number1, number2] = datas;
// console.log(number1, number2);

// let datas = new Array(5).fill(0);
// console.log(datas);

// fill(value): Array 객체의 모든 칸에 value로 초기화
// let datas = new Array(5).fill(0);

// forEach((value, index, array) => {})
// datas.forEach((data, i, datas) => {
//     console.log(data, i, datas);
// });

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// for (let i in datas) {
//     console.log(i);
// }

// for (let data of datas) {
//     console.log(data);
// }

// 2 ~ 10까지 2의 배수로 Array객체에 담기
// let datas = new Array(5).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * 2;
// });

// console.log(datas);

// 1~10까지 담은 후 각 값에 제곱을 출력한다.
// let datas = new Array(10).fill(0);
// datas.forEach((data, i, datas) => {
//     datas[i] = i;
// });
// datas.forEach((data) => {
//     console.log((data + 1) * (data + 1));
// });

// map ((value, index, array) => {})
// 기존 값을 전달한 callback 함수의 리턴값으로 변경
// const datas = new Array(10, 6, 4, 8, 2);
// 기존 값을 두 배 증가시킨다.
// const updatedDatas = datas.map((data) => data * 2);
// console.log(updatedDatas);

// filter((value, index, array) => {}) - true, false만 리턴
const datas = new Array(10, 6, 4, 8, 2);
const updatedDatas = datas.filter((data) => data % 4 == 0);
console.log(updatedDatas);

// reduce((temp, data, i) => {}, 초기값)
// 리턴값을 다시 temp에 담아준다.
// 초기값을 설정하면 data에 담기고,
// 초기값을 설정하지 않으면 datas의 첫번째 값이 data에 담긴다.
// i는 인덱스이며, 초기값의 유무에 따라 시작 인덱스가 바뀐다(초기값이 없으면 1이다).
// reduce는 누적 알고리즘에서 사용된다.
// let datas = new Array(5).fill(0).map((data, i) => i + 1);
// let test = datas.reduce((temp, data, i) => {
//     return temp + data;
// });

//문자열
// split(): 구분점을 전달해서 값을 나눠준다.
//          Array 객체로 리턴하기 때문에, 문자열을 Array객체로 바꿀 때도 사용한다.
// console.log("ABC".split(""));

// includes(value): value가 문자열에 포함되었는지 검사
// console.log("ABC".include("Z"));

// charAt(index): 해당 인덱스의 문자열을 추출
// console.log("ABCD".charAt(0));

// 형변환
// parseInt: 정수만 추출해준다.
// console.log(parseInt("14px") + 1);
// Number(): 정수 외에 다른 문자열이 있으면 오류
// console.log(Number("14px") + 1);
