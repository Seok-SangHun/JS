// 모듈화
// getNumbers에 일회용 함수의 리턴값이 담긴다.
// (function(){})() : 함수 선언과 동시에 사용
const getNumbers = (function () {
    // 서비스 1
    function getOne() {
        return 1;
    }
    // 서비스 2
    function getTwo() {
        return 2;
    }

    // 구현된 전체 서비스를 객체로 리턴
    return { getOne: getOne, getTwo: getTwo };
})();

getNumbers.getOne();
getNumbers.getTwo();

const { getOne, getTwo } = getNumbers;
console.log(getOne());
console.log(getTwo());
