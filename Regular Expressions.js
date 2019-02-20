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

// 返回匹配的字符串
(function() {
  var string = 'abab';

  var pattern = /ab/;

  console.log(pattern.exec(string));
})()

// 返回true或者false
(function() {
    var string = 'abab';

    var parttern = /ab/;

    console.log(parttern.test(string));
})()
