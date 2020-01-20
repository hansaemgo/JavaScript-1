// callback함수로 1- 5까지 출력

function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000);
}

// 콜백지옥
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝 !!!');
                });
            });
        });
    });
});

// promis 만들기(성공 - resolve 호출)
const myPromise = new Promise((resolve, reject) => {
    // 구현
    setTimeout(() => {
        resolve('result');
    }, 1000);
});
// 성공시 .then(...) 이름상관없음
myPromise.then(success => {
    console.log('성공');
});

// promise 만들기 (실패 - reject 호출)
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000);
});

myPromise2
    .then(success => {
        console.log('성공');
    })
    .catch(e => {
        console.error(e);
    });
