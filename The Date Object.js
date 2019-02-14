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

// 将字符串转换成日期
(function() {
  var today = new Date('2016/05/20');
  console.log(today);
})()

// 将字符串格式的转换成纳秒数
(function() {
  console.log(Date.parse('2016/05/20'));
})()

// 获取日期的日,getDate
(function() {
  var today = new Date();
  console.log(today.getDate());
})()

// 获取星期
(function() {
  var birthday = new Date('August 19, 1975 23:15:30');
  var day1 = birthday.getDay();
  // Sunday - Saturday : 0 - 6

  console.log(day1)
  // expected output: 2
})()
