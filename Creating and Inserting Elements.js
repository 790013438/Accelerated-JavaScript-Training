(function(){
  var p = document.createElement('P'); 
  p.textContent = 'A new paragraph!';
  p.style.fontSize = '17px';
  console.log(p);

  var a = document.querySelector('a');

  // 在元素内的最后添加
  a.appendChild(p);

  var p1 = document.createElement('P');
  p1.textContent = 'A new paragraph one!';
  // 在指定位置添加，内部元素，
  // p1 新node
  // a  参考位置，node将添加到参考元素之前
  a.parentNode.insertBefore(p1, a);

})()
