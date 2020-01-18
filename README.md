# Javascript-1

### 1. Expression

    - 값을 만들어내는 간단한 코드 : 표현식
    - javascript Expression / 자바스크립트 표현식
    - 값을 만들어내기 때문에 인자로 사용할수 있다.

### 2. Statement

    - 마지막 문장의 결과가 반환됨
    - 한줄에 여러문장은 세미콜론으로 문장 구분해야한다
    - 한줄에 문장이 하나인 경우 세미콜론 없어도 문제 없음 (관례적임)
    - 조건문(if)과 반복문(for)도 문장이며 마지막 } 뒤에 세미콜론 없음

### 3. 키워드와 예약어 (reserved keyword)

    - 키워드 :  특정한 목적을 위해 사용하는 단어
    ex) var(변수선언)
    - 예약어 : 프로그램 작성시 변수명 함수명등으로 사용 불가능
    ex) return, for
    - future reserved keyword : 사용가능성이 있기때문에 사용 불가능.
    ex) int, count, short

### 4. 식별자 (identifier)

    - 코드내의 변수, 함수 혹은 객체안의 속성 식별하는 문자열
    ex) var name = 'mark'의 name, function Hello(){} 의 Hello
    ex) var person = {name:'mark', age:37} 객체의 property (name, age)
    - 대소문자 구분
    ex) var myname, var myName
    - 유니코드문자, '&',  '_',  숫자(0-9) 사용 가능하지만 숫자로 시작불가능
    - 공백문자 사용 불가능

### 5. 주석 (comment)

    - 소스코드에서 프로그램에 영향을 주지않고 무시되는 부분
    - 소스코드를 볼수 있는 도움을 주는 역할
    - 한줄주석 ex) // 이 함수는 덧셈을 하는 함수입니다
    - 여러줄 주석 ctrl+/  또는 /**/

### 6. 변수와 상수 (variable and constant)

    - 사용하는 값을 보관하는 보관소 역할
    - 상수 : const 식별자  ex) const sum = 5 + 10
    - 변수 : let (값을 재할당 할 수 있음)

### 7. 변수의 유효범위 (scope of variables)

    - 블록(block): { } 중괄호로 이루어진 하나의 덩어리
    - 블록, 블록외부, 중첩사용 가능
    - 함수스코프 : var의 유효범위 ES6부터 let을 사용
      ex) function () {}

### 8. var와 호이스팅

    - 호이스팅 : 아래있는 선언(만)을 끌어올린다 (var)
    ex) 함수선언 전에 호출을 먼저하는 것
    - let 은 먼저 선언이 되어야 사용이 가능 하다 호이스팅 현상이 없음.

### 9. 자료형

    - 기본타입 (primitive values)
        1. Boolean : true(참) / false(거짓)
            - ex)console.log(isTrue, typeof isTrue) -> Boolean
        2. Null : null type ->'object' 값이 없다
        3. Undefined : 값이 할당되지 않았다.
        4. Number : 숫자 (정수, 소수, NaN- Not of Number)
        5. String : 문자 (문자+문자도 가능), template literals `&{name}이렇게` 사용가능
        6. Symbol : ES6부터 시작 고유한 값을 만들어내고 싶을때 사용
            - 같은 인자를 넣어도 비교해보면 다르다 (a===b) false
    - 객체 (objects)

### 10. 조건문-1 (Conditional Statements)

    - 참으로 평가 (Truthy)
        1. true, 37, Mark, {}, []
        2.조건에 따라 실행되며 표현식이 참으로 평가될 때, 실행되는 블럭을 만들어서 사용
        3. if (표현식) { 표현식이 참일때 실행되는 문장 }
        4.블록에 코드가 한줄이면 중괄호 {}는 생략가능
        ex) if(true) console.log('실행);
    - 거짓으로 평가 (falsy)
        1. false, 0, null, undefined, NaN
    - if 에 해당하지 않을때
        1. else {}
        2. else if {}
        3. 중첩 이용도 가능하다

### 11. 조건문-2 (논리연산자)

    1. ! NOT : true는 false로, false는 true로 변경
    2. && AND : 양쪽값이 둘다 ture일때 true
    3. || OR : 양쪽값 중 하나가 ture일 경우 true

### 12. 조건문-3 (삼항연산자를 이용한 연산)

    - 조건 ? 참일때 실행되는 표현식 : 거짓일때 실행되는 표현식
    - 중괄호 {}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 사용 가능

### 13. 조건문-4 (switch문)

    - switch () { default : 뒤에 문장은 참이어서 항상 실행}
    - case 비교할값 : {실행문}
    - 해당 블럭을 거치지 않고 나가고 싶을때, break;

### 14. 반복문-1

    - 불필요한 반복을 하지 않도록 한다 대표적으로 for
    - 유한한 반복: for(초기화; 반복조건; 반복된후 실행코드) {반복되는코드블럭}
    - for (;;){실행문 무한루프} braek;

### 15. 반복문-2

    - whlie(조건) {조건이 거짓이 될때까지 실행}
    - do{조건먼저실행} whlie (조건); 무조건 한번은 실행된다.
    - for of / for in

### 16. 함수-A

    - function 이름 () {실행내용} : 함수선언 (함수는 객체의 한 종류)
    - 함수에 매개변수 function 이름(매개변수) ex) function hello(name);
    - 함수를 실행하여 얻어지는 값 : 리턴
    - function hello(name){ return `hello ${name}`}; hello('mark'); 호출시사용
    - 익명함수를 만들고 특졍한 변수에 담아두기 : const hello = function() {}
    - 선언적 함수 : 호이스팅시 문제없음
    - 차이점 : 호이스팅되지만 변수안에 값이 할당되지 않는다 (var)

### 17. 함수-B

    - 생성자 함수로 만드는 방법 - new 키워드로 객체만들기
    - new Function('매개변수문자열-인자1', '매개변수문자열-인자2', ...., 함수의 바디)
    - ex) const sum = new Function ('a', 'b', 'return a+b')
    - console.log(sum(1,2));

### 18. 화살표함수 (arrow function)

    - 변수에 할당 : const hello1 = (매개변수) => { 실행문 }
    - 매개변수 하나일때 괄호 생략가능 :   function hello2 = name => {}
    - 매개변수 두개이상 괄호 생략불가능 : function hello3 = (name, age) => {}
    - 함수리턴 아래와 같음 : const hello4 = name => {return `hello4 ${name}`}
    - 함수리턴 (리턴과 중괄호 생략) : const hello5 = name => `hello5 ${name}`

### 19. new 함수(생성자함수)

    - 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
    - this.name/ this.age (this로 객체를 생성할수 있다)
    - 화살표 함수는 this를 만들지 못한다 (new X)
    - 함수호출하면 함수를 만들어서 리턴  ex) base(5)
    - 함수를 호출할 때, 함수를 인자로 사용 (콜백)

### 20. 객체(object) - A

    - 함수 혹은 클래스로 틀을 만들고 오브젝트를 찍어낸다 객체(인스턴스)
    - function 틀() {} => new 틀() 생성자 함수로 객체 만들기
    - 생성하면서 데이터 넣기 : function B (name, age) {}
    - 사용 : const b = new B(); const c = new B('mark', 37);
    - 객체에 속성(property) - 특정값 추가하기
    - 값 : this.name = 'Mark' // this. 으로 할당
    - 함수 : this.hello = function () .... 객체

### 21. 객체(object) - B

    - 오브젝트로 객체 만들기 (기초 내장객체): new object()
    - ex) const a = new object({name:'mark'});
    - 프로토타입 체인 : .prototype

### 22. 객체(object) - C

    - 프로토타입을 이용한 객체 확장  // 프로토타입 상속
    - 부모의 객체를 자식에게 상속할수 있다
    - 객체의 원형, 함수는 객체이며, 생성자로 사용잘 함수도 객체이다
    - 객체는 프로퍼티를 가질 수 있는데 프로토타입이라는 프로퍼티는 용도가 약속되어있는 특수한 프로퍼티이다
    - 프로토타입에 저장된 속성들은 생성자를 통해서 객체가 만들어질때 그 객체에 연결된다.

### 01. Hello Javascript!

1. 개발자도구 -> Console탭 사용
2. console.log는 특정내용을 출력하는 방법
    - 문자열, 숫자, 연산가능 ex) console.log(1+2+3+4);

### 02. 변수(Variable) & 상수(Constant)

1. 변수선언(바뀔수 있는 값) : let value = 1;
2. 상수선언(값이 고정적) : const a = 1;
3. var 권장하지 않는다(같은 이름으로 여러번 선언 가능)
4. 데이터타입
    - 숫자(Number)
    - 문자열(String)
    - 참/거짓(Boolean) -> ture/false
    - null(진짜없다) undefined(아직정해지지않았다)

### 03. 연산자 - 산술연산자, 대입연산자

1. 연산자 : 프로그래밍 언어에서 특정 연산을 하도록 하는 문자.
2. 산술연산자 : 사칙연산 작업을 하는 연산자 ( + - \* /)
    - ++가 앞으로 오느냐 뒤로 오느냐에 따라 차이점 있음 (--도 마찬가지)
3. 대입연산자 : 특정 값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자
    - +=, -=, \*=, /=

### 04. 논리연산자

1. ! NOT : true는 false로, false는 true로 변경
2. && AND : 양쪽값이 둘다 ture일때 true
3. || OR : 양쪽값 중 하나가 ture일 경우 true
