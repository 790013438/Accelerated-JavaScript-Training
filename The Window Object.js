// 浏览器的内部宽度
console.log(window.innerWidth)

// 基于浏览器的变量， 结果是一样的
console.log(window.innerWidth)
console.log(innerWidth)

// 得到外部的宽度
console.log(outerWidth)

// 浏览器内页面的高度和浏览器外边(包括浏览器的边框)的高度
(function() {
  console.log(window.innerHeight);
  console.log(outerHeight);
})()
