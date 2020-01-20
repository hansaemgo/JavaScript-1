// callback함수로 1- 5까지 출력

// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if (callback) {
//             callback(increased);
//         }
//     }, 1000);
// }

// 콜백지옥
// increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//             increaseAndPrint(n, n => {
//                 increaseAndPrint(n, n => {
//                     console.log('작업 끝 !!!');
//                 });
//             });
//         });
//     });
// });

// promis 만들기(성공 - resolve 호출)
// const myPromise = new Promise((resolve, reject) => {
//     // 구현
//     setTimeout(() => {
//         resolve('result');
//     }, 1000);
// });
// // 성공시 .then(...) 이름상관없음
// myPromise.then(success => {
//     console.log('성공');
// });

// // promise 만들기 (실패 - reject 호출)
// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error());
//     }, 1000);
// });

// myPromise2
//     .then(success => {
//         console.log('성공');
//     })
//     .catch(e => {
//         console.error(e);
//     });

function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

// .then 내부에 함수를 넣어 Promise 리턴하는 방법
// increaseAndPrint(0)
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .then(n => {
//         return increaseAndPrint(n);
//     })
//     .catch(e => {
//         console.error(e);
//     });

// then 내부에 넣은 함수에서 또 Promise 리턴하면 연달아 사용 가능
increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });
