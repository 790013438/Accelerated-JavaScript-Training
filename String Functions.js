// 可以认为像数组
var string = 'Any text';
console.log(string.length);

// 取第3个字母,数组下标2
console.log(string[2]);

// str.charAt(index) 得到同样的效果,按数组下标取字母
console.log(string.charAt(2));

// 连接字符串, 或者使用+
console.log(string.concat(' add a new string'));

// 转换成大写，ANY TEST
var string = 'Any test';
console.log(string.toUpperCase());

// 按照指定的字母，拆分字符串
var string = 'Any test';
console.log(string.split(' '));

// 不要前后的空格
var string = '   Any text      ';
console.log(string.trim());
