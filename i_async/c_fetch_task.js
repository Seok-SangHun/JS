// jsonplaceholder에 posts 정보를 요청한다.
// 전달받은 게시글들 중, id가 짝수인 게시글 아이디와 제목만 출력한다.
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//         posts
//             .filter((post) => post.id % 2 === 0)
//             .forEach((post) => {
//                 console.log(`${post.id}: ${post.title}`);
//             });
//     });

// jsonplaceholder에 comments 정보를 요청한다.
// 전달받은 댓글들 중, postId가 3인 댓글 내용을 출력한다.
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then((comments) => {
//         comments
//             .filter((comment) => comment.postId === 3)
//             .forEach((comment) => {
//                 console.log(`${comment.body}`);
//                 console.log("==============================");
//             });
//     });

// fetch("https://jsonplaceholder.typicode.com/comments?postId=3")
//     .then((response) => response.json())
//     .then((comments) => {
//         comments.forEach((comment) => {
//             console.log(`${comment.body}`);
//             console.log("==============================");
//         });
//     });

// users 정보를 요청한 뒤 zipcode(우편번호)만 출력
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         users
//             .map((user) => user.address)
//             .forEach(({ zipcode, ...rest }) => {
//                 console.log(zipcode);
//             });
//     });
