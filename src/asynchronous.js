function work() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
}

work();
console.log('다음작업');
// work 호출후 '다음작업'이 실행된다. 비동기로 변형을 위해  setTimeOut 사용
