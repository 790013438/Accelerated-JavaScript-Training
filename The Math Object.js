// 打印pi
console.log(Math.PI);

// 打印数学常数
console.log(Math.E);

// 取决绝对值
(function() {
     console.log(Math.abs(-3));
})()

// 向上去整,2
(function() {
     console.log(Math.ceil(1.47));
})()

// 向下取整，1
(function() {
 console.log(Math.floor(1.000010000001));
})()

// 函数返回 e×，×表示参数
(function() {
  console.log(Math.exp(2))
})()

// 返回×, e×的×
(function(){
   console.log(Math.log(Math.exp(2)))
})()

// 取最大值
(function(){
   console.log(Math.max(1,2,3,4,2,34,4,12,23))
})()

// 获得随机数
(function(){
   console.log(Math.random())
})()
