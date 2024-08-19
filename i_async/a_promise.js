// 대기, 이행, 거절
const promise = new Promise((resolve, reject) => {
    let check = false;
    if (check) {
        resolve("성공!");
    } else {
        reject("실패!");
    }
});

// 항상 콜스택쪽이 먼저 실행되고 나서 libuv쪽이 실행된다.
// 즉, 비동기 코드가 더 늦게 된다.
// let message = "";

// promise.then((result) => {
//     message = result;
// });

// console.log(message);

promise
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });
