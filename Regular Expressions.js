// 展示正则表达式
(function() {
  var string = 'abc';

  var pattern = /ab/;

  console.log(pattern);
})()

// 返回匹配的字符串
(function() {
  var string = 'abc';

  var pattern = /ab/;

  console.log(pattern.exec(string));
})()
