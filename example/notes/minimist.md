###  minimist介绍

minimist是一个nodejs包，用于解析命令行参数。它可以帮助解析命令行参数字符串，并将其转换为一个对象，其中对象的每个属性对应一个命令行参数和其值。

minimist是一个非常轻量级的工具，它仅用于解析命令行参数，不支持子命令、自动帮助文档、版本号等CLI工具中常用的功能。

### 使用

```js
// minExam.js
const argv = process.argv;
const minimist = require('minimist');
const args = minimist(argv.slice(2));

console.log(args);
```

在命令行输入以下命令和参数
```
node minExam.js --name yivn --age 18 --handsame -ipq 128 abc efd
```
输出


```
{
  _: ['abc', 'efd'],
  name: 'yivn',
  age: 18,
  handsome: true,
  i: true,
  p: true,
  q: 128
}
```

可以看到，minimist支持解析多种类型形式的参数，下面分别列举一下:

  
1. 单破折号：单折号一般用于简称，适用于单字符参数。例如上面的`-ipq`，即使单破折号后面有三个字符，但是最后被解析出来的时候还是被拆分开来，并且后面跟着的参数项会被当做最后一个字符参数的值，例如`128`被当成了参数`q`的值。而前面`i`和`p`因为没有值，被当成布尔值，默认为`true`。
2. 双破折号：双破折号一般适用于全称的参数。例如上面的`name`和`age`，他们后面跟着的都是他们各自的值，后没没跟随值的都被当成布尔值，默认为`true`，例如上面的`handsome`。å
3. 除却以上两种，其余参数在解析出来后，都成为了`_`数组的元素。

