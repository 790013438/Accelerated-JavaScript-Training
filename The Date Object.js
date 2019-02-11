// 获取当前的日期
(function(){
  var today = new Date();
  console.log(today);
})()

// 获取指定的日期
(function(){
  var today = new Date(2016, 5, 26);
  console.log(today);
  console.log(today.toString());
})()

// 日期超出31会自动跳转到下一个月，超出年会跳转到下一年
(function(){
  var today = new Date(2016, 11, 32);
  console.log(today);
})()
