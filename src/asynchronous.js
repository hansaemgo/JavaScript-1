// 1. work함수가 호출 된후 그 다음작업이 실행 (동기적)

// function work() {
//     const start = Date.now();
//     for (let i = 0; i < 1000000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
// }

// work();
// console.log('다음작업');
// work 호출후 '다음작업'이 실행된다. 비동기로 변형을 위해  setTimeOut 사용

// 2. work() 가 진행되는 동안 다른작업도 진행되게 하기위해서 setTimeout 사용
// 비동기적 처리 (첫번째 파라미터 : 함수, 두번째 파라미터 : 시간)
// setTimeout : 시간 0 -> 브라우저 기본값이 4

// function work() {
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) {}
//         const end = Date.now();
//         console.log(end - start + 'ms');
//     }, 0);
// }

// console.log('작업시작');
// work();
// console.log('다음작업');

// 진행순서 작업시작출력 -> work 시작 -> 다음작업출력 -> work끝나서 값나옴

// 3. work()함수가 끝나고 어떤 작업을 실행시키고 싶다면 callback함수를 파라미터로 넘겨준다

function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0);
}

console.log('작업시작!');
work(ms => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요');
});
console.log('다음작업');
