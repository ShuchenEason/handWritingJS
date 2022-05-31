function Parent(name) {
    // this.isShow = true
    // this.info = {
    //     name: "yhd",
    //     age: 18,
    // };
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getInfo = function () {
    console.log(this.info);
    console.log(this.isShow); // true
}

Parent.prototype.sayName = function () {
    console.log(this.name);
}

// 原型链继承
// 父类的所有引用属性（info）会被所有子类共享，更改一个子类的引用属性，其他子类也会受影响
// 在创建子类型的实例时，不能向父类型的构造函数传递参数

// function Child() { };
// Child.prototype = new Parent();
// Child.prototype.constructor = Child


// constructor 继承
// 子类不能访问父类原型上定义的方法（即不能访问Parent.prototype上定义的方法），因此所有方法属性都写在构造函数中，每次创建实例都会初始化

// function Child() {
//     Parent.call(this)
// }


// 组合继承
// 父类的方法可以复用
// 可以在Child构造函数中向Parent构造函数中传参
// 父类构造函数中的引用属性不会被共享
// 无论在什么情况下，都会调用两次父类的构造函数

// function Child(name, age) {
//     // 继承父类属性
//     Parent.call(this, name)
//     this.age = age;
//  }
//  // 继承父类方法
//  Child.prototype = new Parent();
//  Child.prototype.constructor = Child
//  Child.prototype.sayAge = function () {
//     console.log(this.age);
//  }


// 寄生式组合继承

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
Child.prototype.sayAge = function () {
    console.log(this.age);
}


// 多重继承

// function Me(){
//     // 继承Person的属性
//     Person.call(this);
//     Parent.call(this);
// }
// // 继承Person的方法
// Me.prototype = Object.create(Person.prototype);
// Object.assign(targetObj,copyObj)
// Object.assign(Me.prototype,Parent.prototype);

// // 指定构造函数
// Me.prototype.constructor = Me;

const ins = new Child('jarvis', 18);
ins.colors.push('black');
console.log(ins.colors);// ["red", "blue", "green", "black"]
ins.sayName();//'jarvis'
ins.sayAge();//18

const ins2 = new Child('ershiyi', 21);
console.log(ins2.colors);//["red", "blue", "green"]
ins2.sayName();//'ershiyi'
ins2.sayAge();//21