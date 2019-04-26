(function(){
  // 获取最后的子节点
  console.log(document.body.lastElementChild)

  // 获取第一个子节点的子节点（嵌套），的挨着节点
  console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
})()
