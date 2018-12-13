function message(message1) {
  console.log(message1);
  console.log(arguments);
}

message('Hi!', 10);

//---------
// 没有在function里定义参数，传来的多余参数也可以在function里面调用
function message(message1) {
  console.log(message1);
  console.log(arguments[1]);
}

message('Hi!', 10);

//---------
// 没有在function里定义参数，使用的参数下标超出实际调用的参数时会得到undefined
function message(message1) {
  console.log(message1);
  console.log(arguments[2]);
}

message('Hi!', 10);

//---------
// 得到传入function参数的个数
function message(message1) {
  console.log(message1);
  console.log(arguments.length);
}

message('Hi!', 10);

//---------
// 得到function的名字
function message(message1) {
  console.log(message1);
}

console.log(message.name);

//---------
// 动态获取function的名字
function message(message1) {
  console.log(message1);
}

var msg = message;

console.log(msg.name);

//---------
// 获取function定义的参数的个数
function message(message1) {
  console.log(message1);
}

var msg = message;

console.log(msg.length);
