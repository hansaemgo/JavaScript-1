// 상속의 구체적인 수단
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
// Sub 객체에 ultrProp프로퍼티가 없어도 상위 부모객체에 트루로 설정되어 있으므로
//상속받아서 true

// 생성자는 기본적으로 함수
//함수호출시 new 붙이면
// prototype(기본객체)에 저장
