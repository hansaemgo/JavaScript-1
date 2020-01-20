function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼이';
};

const getTurttle = async () => {
    await sleep(3000);
    return '거북이';
};

// 멍멍이 -> 토끼 -> 거북이
// async function process() {
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turttle = await getTurttle();
//     console.log(turttle);
// }

// 동시에 작업을 시작하게 할수있다 Promise.all
// async function process() {
//     const start = Date.now();
//     const results = await Promise.all([getDog(), getRabbit(), getTurttle()]);
//     console.log(Date.now() - start); // 작업이 몇초걸렸나 알아보기
//     console.log(results);
// }
// process();

// 프로미스에 대한 배열을 비구조화 할당문법으로 따로 추출하여 조회가능

// async function process() {
//     const [dog, rabbit, turttle] = await Promise.all([
//         getDog(),
//         getRabbit(),
//         getTurttle()
//     ]);
//     console.log(dog);
//     console.log(rabbit);
//     console.log(turttle);
// }

async function process() {
    const first = await Promise.race([getDog(), getRabbit(), getTurttle()]);
    console.log(first);
}

process();
