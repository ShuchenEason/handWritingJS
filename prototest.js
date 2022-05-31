// function User() { }
// User.prototype.sayHello = function () { }
// var u1 = new User();
// var u2 = new User();
// console.log(u1.sayHello === u2.sayHello);
// console.log(User.prototype.constructor);
// console.log(User.prototype === Function.prototype);
// console.log(User.__proto__ === Function.prototype);
// console.log(User.__proto__ === Function.__proto__);
// console.log(u1.__proto__ === u2.__proto__);
// console.log(u1.__proto__ === User.__proto__);
// console.log(Function.__proto__ === Object.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype); 


var F = function () { }
Object.prototype.a = function () { }
Function.prototype.b = function () { }

var f = new F();

console.log(f.a, f.a.b, f.b, F.a, F.b);