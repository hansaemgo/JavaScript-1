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
