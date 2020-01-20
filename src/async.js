// ms 뒤에 성공하는 Promise만들기
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Error발생시키기
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

// process의 결과는 promise 결과 출력
async function process() {
    // console.log('안녕하세요');
    // await sleep(1000);
    // console.log('반갑습니다.');
    // return true;

    // 에러잡아낼때. try - catch 문 사용
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

// process().then(value => {
//     console.log(value);
// });

process();
