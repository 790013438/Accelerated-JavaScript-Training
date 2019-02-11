# Accelerated-JavaScript-Training

| 问题: 1. <tab>可以去掉吗 | 知：字符串的trim可以去掉前后的空格 |
| -------------            | :-------------:                    |
| 1. 可以去掉              |                                    |

| 问题: 超出下标访问范围有什么效果，如-1。使用下标访问和charAt访问的效果是一样的吗； | 1. 字符串可以认为是数组. `2. 字符串可以通过cancat或者"+"连接` |
| -------------                                                                      | :-------------:                                               |
| 解答：用下标访问的结果是undefined;用charAt访问的结果是''空字符串                   |

| 问题: 1. 圆周率到几位 | 知 Math.PI Π圆周率π л Л п П ∏ |
| -------------         | :-------------:               |
| 15位，受js的精度限制  |                               |

| 问题: Number.toFixed也是吗     | 取绝对值，根据临近的小数值，不管更进一步的小数 |
| -------------                  | :-------------:                                |
| 解答：根据临近的小数位四舍五入 |

| 问题:         | 取绝对值abs(absolute) |
| ------------- | :-------------:       |
| 解答：        |

| 问题: 只要小数部分大于零就向上 | 向上取整ceil;小数部分为零，则只是整数部分 |
| -------------                  | :-------------:                           |
| 解答：不能超出js小数表示的精度 |

| 问题: 如果想要负数的整数，则要向上取整吗 | 向下取整,floor  |
| -------------                            | :-------------: |
| 解答：如果是负数，想要整数，则要向上取整 | 去掉小数部分, 可以用于取整数

| 问题:         | Math.exp() 函数返回 e×，×表示参数，e是欧拉常数（Euler's constant），自然对数的底数。 |
| ------------- | :-------------:                                                                      |
| 解答：        | ×的由来，`thift*thiftX`

| 问题:         | log,返回e×的指数× |
| ------------- | :-------------:   |
| 解答：        |

| 问题: 1. 可以判断日期吗；2. 可以判断小数吗 | 返回传入参数的最大值 |
| -------------                              | :-------------:      |
| 解答：1. 返回最大日期；2. 返回最大的小数   |

| 问题:         | 获得随机数，random; 0到1之间，不包含1 |
| ------------- | :-------------:                       |
| 解答：        | Math.floor(Math.random() * 100)

| 问题: 要是月份12，则会怎么样                            | 获得指定日期new Date(2019, 1, 24) |
| -------------                                           | :-------------:                   |
| 解答：会跳转到下一年1月，整数负数代表相应的计算加减日期 | 日期的月份从0开始数

| 问题:         | 要是日期为32日，则会增加月份 |
| ------------- | :-------------:              |
| 解答：        |

| 问题: 月数按0开始数吗                                                                       | 可以将yyyy/mm/dd格式的字符串转换成日期 |
| -------------                                                                               | :-------------:                        |
| 解答：字符串格式的转换日期按1开始数，如果是yyyy-00-dd则是无效日期，有超出部分，不会自动进位 | yyyy-MM-dd格式的字符串也可以转换成日期

| 问题:         | 将日期格式的字符串转换成纳秒数，Date.parse('YYYY-MM-dd') |
| ------------- | :-------------:                                          |
| 解答：        |
