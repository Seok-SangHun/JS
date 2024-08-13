// 1 ~ 10까지 중 3제외하고 출력하기
// for (let i = 0; i < 9; i++) {
//     console.log((i > 1 ? i + 1 : i) + 1);
// }

// for (let i = 0; i < 10; i++) {
//     if (i != 2) {
//         console.log(i + 1);
//     }
// }

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i + 1);
}
