// 상속의 구체적인 수단
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);

// 1. 객체 o에서 ultraProp를 찾는다
// 2. 없다면 Sub.prototype.ultraProp를 찾는다.
// 3. 없다면 Super.prototype.ultraProp를 찾는다
// 4. 없다면 Ultra.prototype.ultraProp를 찾는다

// prototype은 객체와 객체를 연결하는 체인의 역할을 한는 것이다.
// 이러한 관계를 prototype chain이라고 한다.
