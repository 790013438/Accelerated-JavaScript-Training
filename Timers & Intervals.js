// 等待第二个参数的数字后，执行第一个函数function
setTimeout(function(){
  console.log('Finished');
}, 2000);

// 执行第一个函数function, 第二个整数
setInterval(function() {
 console.log('Ping');
}, 500);

// 一定时间后停止,clearInterval
var interval = setInterval(function() {
 console.log('Ping');
}, 500);

setTimeout(function() {
 clearInterval(interval);
}, 2500);
