// function change(img) {
//     // 현재 이미지와 다른 이미지로 변경
//     img.src =
//         "images/" + (img.src.includes("icon5.png") ? "icon4.png" : "icon5.png");
// }

const module = (function () {
    const change = (img) => {
        img.src =
            "images/" +
            (img.src.includes("icon5.png") ? "icon4.png" : "icon5.png");
    };
    return { change: change };
})();
