// 转换， 5
var a = '5';
console.log(parseInt(a));

// 如果是非数字，则是NaN，会尽可能的转换
var a = 'test';
console.log(parseInt(a));

// 默认是10进制，可以设置为16进制，16494883
var a = 'FBB123';
console.log(parseInt(a, 16));

// 将数字换乘string
var a = 10;
console.log(a.toString());

// 四舍五入，并保留指定的位数
var a = 10.3;
console.log(a.toFixed());

// 如果超过实际的小数位数，则补零
var a = 10.3;
console.log(a.toFixed(2));
