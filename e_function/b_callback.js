// arrow expression
// 함수 선언 시, 이름이 없는 익명 함수 선언 방법

// const printName = (name) => {
//     console.log;
// };
// printName("한동석");

// // 첫 번째, 두 번째 매개변수는 값이지만, 세 번째에 작성된 callback에는 함수가 들어온다.
// const add = (number1, number2, callback) => {
//     // 만약 callback에 아무것도 전달되지 않았다면, undefined이다.
//     // 이는 조건식 자리에 작성할 경우 false를 의미한다.
//     if (callback) {
//         // 만약 callback 함수가 전달되었다면,
//         // 전달받은 callback 함수를 사용한다.
//         // 단, 전달한 함수의 매개변수 구조를 알아야 사용할 수 있다.
//         callback(number1 + number2);
//     }
//     // 만약 callback에 함수를 전달받지 않았다면, 두 정수의 결과를 리턴한다.
//     return number1 + number2;
// };

// // 출력하지 않고 6 리턴
// let total = add(1, 5);

// // 출력하고 6 리턴
// total = add(1, 5, (result) => {
//     console.log(result);
// });

// // 1. 두 정수의 곱셈을 구한 뒤
// const multiple = (number1, number2, callback) => {
//     let result = number1 * number2;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };
// // 2. 결과에 2를 곱해서 출력
// const printResult = (result) => {
//     console.log(result * 2);
// };

// multiple(3, 5, printResult);

// 성씨와 이름을 전달 받아서 전체 이름을 만든 뒤 "000님" 출력
// const setName = (first, last, callback) => {
//     let result = first + last;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };

// const printName = (result) => {
//     console.log(result + "님");
// };
// setName("석", "상훈", printName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// const getCount = (price, total, callback) => {
//     let count = price / total;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqaulThan5 = (count) => {
//     return count <= 5;
// };

// let check = getCount(140000, 70000, checkLessEqaulThan5);
// console.log(check);

// let count = getCount(140000, 70000);
// console.log(count)

// count(1, 10, printBool);

// 결제 상품 가격과 결제 상태를 전달 받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// const product = (price, status, callback) => {
//     let result = status ? price + "원 결제완료" : price + "원 결제취소";
//     if (callback) {
//         callback(result);
//     }
// };

// product(1000, true, console.log);

// 문제 3개 만들어서 팀원에게 공유

// 템플릿 문법
// let price = 1000;
// console.log(`${price}원`);
// let status = true;
// status ? `${price}원 결제 완료` : `${price}원 결제 취소`;

// 상품 가격과 구매 개수를 전달 받아서 총 금액을 계산합니다.
// 총 금액이 10000원 이상일 경우 "무료 배송", 그렇지 않을 경우 "배송비 3000원 추가"를 출력합니다.
// const calculateTotal = (price, quantity, callback) => {
//     let total = price * quantity;
//     if (callback) {
//         callback(total);
//     }
//     return total;
// };

// const shippingMessage = (total) => {
//     total >= 10000
//         ? console.log("무료 배송")
//         : console.log("배송비 3000원 추가");
// };

// calculateTotal(2000, 5, shippingMessage); // 10000원이므로 "무료 배송"
// calculateTotal(2000, 4, shippingMessage); // 8000원이므로 "배송비 3000원 추가"

// 두 숫자의 합을 구한후,
// 만약 두 숫자의 합이 짝수일 경우 "짝수입니다"를 출력하고, 홀수일 경우 "홀수입니다"를 출력합니다.
// const checkEvenOdd = (number1, number2, callback) => {
//     let sum = number1 + number2;
//     if (callback) {
//         callback(sum);
//     }
//     return sum;
// };

// const printEvenOdd = (sum) => {
//     sum % 2 === 0 ? console.log("짝수입니다") : console.log("홀수입니다");
// };

// checkEvenOdd(3, 4, printEvenOdd); // 7이므로 "홀수입니다"
// checkEvenOdd(2, 4, printEvenOdd); // 6이므로 "짝수입니다"

// // 나이와 성별을 전달 받아서 나이에 따라 성인 또는 미성년자로 분류하고, 성별에 따라 메시지를 출력합니다.
// // 나이가 20세 이상일 경우 "성인", 그렇지 않을 경우 "미성년자"를 출력합니다.
// // 성별이 '남'일 경우 "남성", '여'일 경우 "여성"을 출력합니다.
const categorizePerson = (age, gender, callback) => {
    let category = age >= 20 ? "성인" : "미성년자";
    let genderMessage = gender === "남" ? "남성" : "여성";
    let result = category + ", " + genderMessage;

    if (callback) {
        callback(result);
    }

    return result;
};

const printCategoryGender = (result) => {
    console.log(result);
};

categorizePerson(25, "남", printCategoryGender); // "성인, 남성"
categorizePerson(15, "여", printCategoryGender); // "미성년자, 여성"

// 문자열과 문자를 입력받아 해당 문자가 문자열에 포함되어있는지
// 확인하고 이 결과를 출력하는 함수를 작성하세요
// const checkToInclude = (word, character, callback) => {
//     let check = word.includes(character);
//     if (callback) {
//         callback(check);
//     }
//     return check;
// };

// checkToInclude("ABC", "Z", console.log);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
const compareCowWithPig = (cowCount, pigCount, callback) => {
    let result = cowCount > pigCount;
    if (callback) {
        callback(result);
    }
    return result;
};

const printLessThan = (result) => {
    console.log(!result ? "소" : "돼지");
};

compareCowWithPig(250, 220, printLessThan);
