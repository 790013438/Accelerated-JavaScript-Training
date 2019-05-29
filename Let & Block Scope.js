// var 变量会变成全局的
var name = 'Max';
console.log(name);

// let 定义的变量会在指定的范围内
if (true) {
  let name1 = 'Max1';
}
console.log(name1);
