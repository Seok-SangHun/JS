// 콜백으로 계속 연결해야하기 때문에 굉장히 불편하다.
// const userService = (() => {
//     const getUserList = (callback) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then(callback);
//     };

//     return { getUserList: getUserList };
// })();

// const printUsers = (users) => {
//     console.log(users);
// };

// userService.getUserList(printUsers);

// async, await 문법으로 해결할 수 있다.
// async function getName() {
//     return "hds";
// }

// async function printName() {
//     let result = await getName();
//     console.log(result);
// }

// printName();

const userService = (() => {
    const getUserList = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        callback(users);
    };

    return { getUserList: getUserList };
})();

const printUsers = (users) => {
    console.log(users);
};

userService.getUserList(printUsers);
