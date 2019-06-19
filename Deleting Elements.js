(function(){
  var a1 = document.querySelectorAll('a')[1];

  // 还有parentElement，这是兼容的写法
  a1.parentNode.removeChild(a1);

  var a2 = document.querySelectorAll('a')[1];
  // 不兼容的写法,部分浏览器认为没有remove属性
  // --a2.remove();
  // 这个写法是可以的，删除时会连着父类节点一起删除；parentNode 和 parentElement 几乎等价
  a2.parentElement.remove();
  // 还有一种写法
  a2 = document.querySelectorAll('a')[0];
  a2.parentElement.removeChild(a2);
})()
