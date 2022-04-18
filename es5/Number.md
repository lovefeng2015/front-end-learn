| 方法 | 描述 | 知识点 |
 | --------   | :-----  | :---- |
 | Number | 经过封装的能让你处理数字值的对象 | 如果参数无法被转换为数字，则返回NaN |
 | Number.isFinite()/isFinite() | 检测传入的参数是否是一个有穷数 |Number.isFinite() 不会强制将一个非数值的参数转换成数值.isFinite()在必要情况下，参数会首先转为一个数值
 | Number.isInteger() | 判断给定的参数是否为整数 | Number.isInteger() 不会强制将一个非数值的参数转换成整数. |
  | Number.isNaN()/isNaN() | 确定传递的值是否为 NaN，并且检查其类型是否为 Number |Number.isNaN() 不会强制将一个非数值的参数转换成数值.isNaN()在必要情况下，参数会首先转为一个数值
  | parseInt() | 依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数 |如果此参数不是字符串，则使用ToString抽象操作将其转换为字符串。忽略此参数中的前导空格
| toFixed() | 使用定点表示法来格式化一个数值 ,小数点后数字的个数|小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。
| Number.prototype.toString() | numObj.toString([radix])|radix指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10。
  | parseFloat() | 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数|parseFloat 也可以解析并返回 Infinity。考虑使用 Number(value) 进行更严谨的解析，只要参数带有无效字符就会被转换为 NaN 


















 ### 如果参数无法被转换为数字，则返回 NaN 注意`null`或者`空字符串`转化为0
 ```
 Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') //-Infinity

 ```

### 你可以用这个方法来判定一个数字是否是有限数字。isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true

```
if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' && isFinite(value);
}

Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, would've been true with
                            // global isFinite('0')
Number.isFinite(null);      // false, would've been true with
                            // global isFinite(null)
isFinite('0')//true

isFinite(null) //true

```

### Number.isInteger()如果被检测的值是整数，则返回 true，否则返回 false。注意 `NaN` 和`正负 Infinity` 不是整数。

```
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};

Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger("10");      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

### 在 JavaScript 中，NaN 最特殊的地方就是，我们不能使用相等运算符（== (en-US) 和 === (en-US)）来判断一个值是否是 NaN，因为 `NaN == NaN` 和 `NaN === NaN` 都会返回 `false`。因此，必须要有一个判断值是否是 NaN 的方法。
### 和全局函数 isNaN() 相比，`Number.isNaN()` 不会自行将参数转换成数字，只有在`参数是值为 NaN 的数字时`，才会返回 true，而isNaN是如果当前值是NaN，或者将其强制转换为数字后将是NaN，则将返回true

```
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
}

Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true

// 下面这几个如果使用全局的 isNaN() 时，会返回 true。
Number.isNaN("NaN");      // false，字符串 "NaN" 不会被隐式转换成数字 NaN。
Number.isNaN(undefined);  // false 数值不是NaN
Number.isNaN({});         // false 数值不是NaN
Number.isNaN("blabla");   // false 数值不是NaN



// 下面的都返回 false 
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");



```

### parseInt()从给定的字符串中解析出的一个整数。或者 NaN，当radix 小于 2 或大于 36 ，或第一个非空格字符不能转换为数字。


### 要将一个数字转换为特定的 radix 中的字符串字段，请使用 thatNumber.toString(radix)函数

以下例子均返回15:
```
parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);   // parseInt(015, 8); 返回 13
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
Copy to Clipboard
```
以下例子均返回 NaN:
```
parseInt("Hello", 8); // 根本就不是数值
parseInt("546", 2);   // 除了“0、1”外，其它数字都不是有效二进制数字
```

使用 toFixed
```
var numObj = 12345.6789;

numObj.toFixed();         // 返回 "12346"：进行四舍六入五看情况，不包括小数部分
numObj.toFixed(1);        // 返回 "12345.7"：进行四舍六入五看情况

numObj.toFixed(6);        // 返回 "12345.678900"：用0填充

(1.23e+20).toFixed(2);    // 返回 "123000000000000000000.00"

(1.23e-10).toFixed(2);    // 返回 "0.00"

2.34.toFixed(1);          // 返回 "2.3"

2.35.toFixed(1)           // 返回 '2.4'. Note it rounds up

2.55.toFixed(1)           // 返回 '2.5'. Note it rounds down - see warning above

-2.34.toFixed(1);         // 返回 -2.3 （由于操作符优先级，负数不会返回字符串）

(-2.34).toFixed(1);       // 返回 "-2.3" （若用括号提高优先级，则返回字符串）
```

### Number.prototype.toString()

- 如果基数没有指定，则使用 10。

- 如果对象是负数，则会保留负号。即使radix是2时也是如此：返回的字符串包含一个负号（-）前缀和正数的二进制表示，不是 数值的二进制补码。

- 进行数字到字符串的转换时，建议用小括号将要转换的目标括起来，防止出错
```
var count = 10;

console.log(count.toString());    // 输出 '10'
console.log((17).toString());     // 输出 '17'
console.log((17.2).toString());   // 输出 '17.2'

var x = 6;

console.log(x.toString(2));       // 输出 '110'
console.log((254).toString(16));  // 输出 'fe'

console.log((-10).toString(2));   // 输出 '-1010'
console.log((-0xff).toString(2)); // 输出 '-11111111'
```

### 位运算取整
```JS
/**采用位运算取整*/	
 (-1.5646) >> 0   ---> -1;
 (-1.5646) << 0   ---> -1;
 /** 这里采用位运算符需要注意一些问题
 	例如
	 	 >> 系列运算符常规需注意问题
		最主要为 ToInt32 越界问题
		如2147483648>>0
		输出 -2147483647
		越界
 **/
```

parseInt
```JS
/**采用位运算取整*/	
 parseInt(-1.5646)   ---> -1;
 (-1.5646) << 0   ---> -1;
 /** 这里parseInt需要注意一些问题 同样也是越界问题
	 parseInt(2e21) ----> 2;
 **/
```
### 位运算实现的原因：
这是由于js内部的类型自动转换，js数值都是由64位浮点型表示的，当进行位运算的时候，会自动转换为32为有符号的整数，并舍弃小数位。所以就可以实现向下取整了。

#### 位运算和Math.floor()的差别：
1. 精度的损失，最大有效范围： 2^32/2-1
```JS
var a=(Math.pow( 2,32)/2-1)+0.5;//a=2147483647.5
a | 0;
a >> 0;
Math.floor(a);
//结果都为2147483647
a+=1;
a | 0;//输出-2147483648
a >> 0;//输出-2147483648
Math.floor(a);//输出2147483648
```
2. 当值为负数的时候，会位运行的结果和Math.floor不一致：
```JS
console.log(Math.floor(-0.8));//输出-1  
console.log(-0.8 | 0);//输出0  
console.log(-0.8 >> 0);//输出0
```
只是由于它先进行转为32位的整数，再在进行舍去小数位，最后转变为负数的结果

### parseInt()
parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。这个估计是直接取整最常用的方法了。

示例：
```JS
JavaScript 代码:
parseInt("2015nov"),  //2015
parseInt(""),  //NaN
parseInt("0xA"),  //10(十六进制)
parseInt(20.15),  //20
parseInt(-20.15),  //-20
parseInt("070");  //56(八进制数)
```

### Math.trunc()
Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。

JavaScript 代码:
```JS
Math.trunc(13.37)    // 13
Math.trunc(42.84)    // 42
Math.trunc(0.123)    //  0
Math.trunc(-0.123)   // -0
Math.trunc("-1.123") // -1
Math.trunc(NaN)      // NaN
Math.trunc("foo")    // NaN
Math.trunc()         // NaN
```
特别要注意的是：Internet Explorer 不支持这个方法，不过写个Polyfill也很简单：

JavaScript 代码:
```JS
Math.trunc = Math.trunc || function(x) {
  if (isNaN(x)) {
    return NaN;
  }
  if (x > 0) {
    return Math.floor(x);
  }
  return Math.ceil(x);
};
```