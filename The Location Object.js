// 打卡新的网页标签
(function(){
  console.log(window.open('http://www.google.com'))
})()

// 替换这个页面打开的网页
(function() {
  console.log(window.location.replace('http://weibo.com'))
})()

// 刷新
(function(){ 
  console.log(window.location.reload())
})()
