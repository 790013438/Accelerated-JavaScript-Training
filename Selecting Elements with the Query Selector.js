(function() {
  console.log(document.querySelector('h1'));

  // 获取指定class的元素
  console.log(document.querySelector('.simple'));

  // 获得 href属性的元素 符合该选择的第一个元素
  console.log(document.querySelector('[href]'));

  // 获得选择的所有元素
  console.log(document.querySelectorAll('[href]'));
})()
