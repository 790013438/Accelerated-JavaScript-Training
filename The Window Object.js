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

// 像map一样存储key 和 value，在内存中
(function() {
  console.log(localStorage.setItem('key1', 1000));
  console.log(localStorage.getItem('key1'));
})()

// 像map一样，存数据在浏览器的tab页中
(function() {
  sessionStorage.setItem('key2', 1000);
  console.log(sessionStorage.getItem('key2'));
})()


