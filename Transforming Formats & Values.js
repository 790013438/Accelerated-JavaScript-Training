// 转换， 5
var a = '5';
console.log(parseInt(a));

// 如果是非数字，则是NaN，会尽可能的转换
var a = 'test';
console.log(parseInt(a));

// 默认是10进制，可以设置为16进制，16494883
var a = 'FBB123';
console.log(parseInt(a, 16));
