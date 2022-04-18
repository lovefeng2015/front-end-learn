以下三种表达式都会创建相同的正则表达式：
```
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数
```

### 将用户输入转义为正则表达式中的一个字面字符串, 可以通过简单的替换来实现：
```
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //$&表示整个被匹配的字符串
}
```

## 正则表达式中的特殊字符
## 分类
### 断言（Assertions）
    断言的组成之一是边界。对于文本、词或模式，边界可以用来表明它们的起始或终止部分

### 边界类断言
 | 字符  | 含义 
 |:-----   | :-----  |
 |  ^     |  匹配输入的开头|
 |  $     |  匹配输入的结束|
 |  \b     | 匹配一个单词的边界，这是一个字的字符前后没有另一个字的字符位置, 例如在字母和空格之间|
  |  \B     | 匹配非单词边界。这是上一个字符和下一个字符属于同一类型的位置：要么两者都必须是单词，要么两者都必须是非单词，例如在两个字母之间或两个空格之间。字符串的开头和结尾被视为非单词
  
  ### 其他断言 前后断言
 | 字符  | 含义 
 |:-----   | :-----  |
 |  x(?=y)  向前断言      |  x 被 y 跟随时匹配 x，但是结果不包括y|
  | x(?!y)  向前否定断言    |   x 没有被 y 紧随时匹配 x，但是结果不包括y|
  | (?<=y)x   向后断言  |   x 跟随 y 的情况下匹配 x，但是结果不包括y|
  | (?<!y)x   向后否定断言   |   x 不跟随 y 时匹配 x，但是结果不包括y|

```
const text = 'A quick fox';

const regexpLastWord = /\w+$/;//或者/fox/
console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;//或者使用split(" "),split(/\s/)
console.log(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]

var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
//字符替换
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

```
在第二个示例中，^用于在输入的开始处匹配，以及在内部使用时用于创建否定或被补充的字符集 组和范围.
```
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// 使用正则 /^[^A]/ 选择 不是以 ‘A’ 开头的水果
// 在这个例子中，“^” 控件符号表示两种含义:
// 1) 匹配输入的开头
// 2) 一个否定的字符集: [^A] ，意思是匹配不是 ‘A’ 的字符

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]
```
```
匹配字边界
let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// 选择包含以 “en” 或 “ed” 结尾的单词的描述:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```
### 组和范围表示表达式字符的 组和范围
 | 字符  | 含义 
 |:-----   | :-----  |
 | x\|y    |  匹配 x 或 y任意一个字符 |
| [xyz][a-c]     |字符集。 匹配任何一个包含的字符。您可以使用连字符来指定字符范围，但如果连字符显示为方括号中的第一个或最后一个字符，则它将被视为作为普通字符包含在字符集中的文字连字符。也可以在字符集中包含字符类 ,[a-z],[A-Z],[\d]=[0-9] [\w-]=[A-Za-z0-9_-]|
| [^xyz][^a-c]   | 一个否定的或被补充的字符集。也就是说，它匹配任何没有包含在括号中的字符。可以通过使用连字符来指定字符范围，但是如果连字符作为方括号中的第一个或最后一个字符出现，那么它将被视为作为普通字符包含在字符集中|
|  (x)     |  捕获组: 匹配x并记住匹配项,正则表达式可以有多个捕获组。结果，匹配通常在数组中捕获的组，该数组的成员与捕获组中左括号的顺序相同。这通常只是捕获组本身的顺序。当捕获组被嵌套时，这一点非常重要。使用结果元素的索引 ([1], ..., [n]) 或从预定义的 RegExp 对象的属性 ($1, ..., $9).当使用 match() 和 /g 标志方式获取匹配信息时，捕获组会被忽略,您仍然可以使用String.matchAll()来获取所有匹配项.matchAll 的另外一个亮点是更好地获取捕获组|
|  \n    |  其中n是一个正整数。对正则表达式中与第n个括号匹配的最后一个子字符串的反向引用(计算左括号)|
| (?<Name>x)   |  具名捕获组: 匹配"x"并将其存储在返回的匹配项的groups属性中，该属性位于<Name>指定的名称下。尖括号(< 和 >) 用于组名|
|  (?:x)    |  非捕获组: 匹配 “x”，但不记得匹配|

使用 组
```
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while((match = regexpNames.exec(personList)) !== null);
Copy to Clipboard
```

使用命名组
```
let users= `姓氏: 李, 名字: 雷
姓氏: 韩, 名字: 梅梅`;

let regexpNames =  /姓氏: (?<first>.+), 名字: (?<last>.+)/mg;
let match = regexpNames.exec(users);

do {
  console.log(`Hello ${match.groups.first} ${match.groups.last}`);
} while((match = regexpNames.exec(users)) !== null);

// Hellow 李 雷
// Hellow 韩 梅梅
```
| 字符  | 含义 
 |:-----   | :-----  |
 | .  |  有下列含义之一:匹配除行终止符之外的任何单个字符: \n, \r, `\u2028` or `\u2029`. 例如, /.y/ 在“yes make my day”中匹配“my”和“ay”，而不是“yes”。在字符集内，点失去了它的特殊意义，并与文字点匹配。需要注意的是，m multiline标志不会改变点的行为。因此，要跨多行匹配一个模式，可以使用字符集`[^]`—它将匹配任何字符，包括新行。 |
 | x\|y    |  匹配 x 或 y任意一个字符 |

 ## 量词
    量词表示要匹配的字符或表达式的数量。

### 类型

 | 字符  | 含义 
 |:-----   | :-----  |
 | x*   |  将前面的项“x”匹配0次或更多次。 |
| x+  |  将前一项“x”匹配1次或更多次。 |
| x?  |  将前面的项“x”匹配0或1次 |
| x{n}   |  其中“n”是一个正整数，与前一项“x”的n次匹配。 |
| x{n,}  |  其中，“n”是一个正整数，与前一项“x”至少匹配“n”次。 |
| x{n,m}  |  其中，“n”是0或一个正整数，“m”是一个正整数，而m > n至少与前一项“x”匹配，最多与“m”匹配。 |
| x*? x+? x?? x{n}? x{n,}? x{n,m}?  |  默认情况下，像 * 和 + 这样的量词是“贪婪的”，这意味着它们试图匹配尽可能多的字符串。?量词后面的字符使量词“非贪婪”：意思是它一旦找到匹配就会停止。例如，给定一个字符串“some <foo> <bar> new </bar> </foo> thing”:/<.*>/ will match "<foo> <bar> new </bar> </foo>"/<.*?>/ will match "<foo>" |

```
const modifiedQuote = '[He] ha[s] to go read this novel [Alice in Wonderland].';
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));
// expected output: Array ["[He]", "[s]", "[Alice in Wonderland]"]

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// expected output: Array ["[He] ha[s] to go read this novel [Alice in Wonderland]"]

```
```
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");// 输出数组 [ "dbbd", "bb", index: 1, input: "cdbbdbsbz" ].
```

### 正则表达式执行后的返回信息

 | 对象 | 属性或索引 | 	描述 | 	在例子中对应的值 |
 | --------   |:-----  | :---- |:---- |
 | myArray 	| | 	匹配到的字符串和所有被记住的子字符串。| 	["dbbd", "bb"]| 
| | index| 	在输入的字符串中匹配到的以0开始的索引值。| 	1| 
||input	|初始字符串。|	"cdbbdbsbz"|
||[0]	|最近一个匹配到的字符串。	"dbbd"|
|myRe	|lastIndex|	开始下一个匹配的起始索引值。（这个属性只有在使用g参数时可用在 通过参数进行高级搜索 一节有详细的描述.)|	5|
||source|	模式字面文本。在正则表达式创建时更新，不执行。|	"d(b+)d"

使用`.exec()`方法时，与`'g'`标志关联的行为是不同的。 （“class”和“argument”的作用相反：在.match()的情况下，字符串类（或数据类型）拥有该方法，而正则表达式只是一个参数，而在.exec()的情况下，它是拥有该方法的正则表达式，其中字符串是参数。对比`str.match(re)`与`re.exec(str)` ), `'g'`标志与`.exec()`方法一起使用获得迭代进展。

```
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]

var xArray; while(xArray = re.exec(str)) console.log(xArray);
// produces:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]

```

### JS获取URL中参数值

```
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');//^表示开头，&表示&符号，|表示或，合起来就是匹配以&开头或前面没有字符的内容。后面应该还有内容吧！
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// 这样调用：
alert(GetQueryString("参数名1"));
alert(GetQueryString("参数名2"));

alert(GetQueryString("参数名3"));

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = GetRequest();
// var 参数1,参数2,参数3,参数N;
// 参数1 = Request['参数1'];
// 参数2 = Request['参数2'];
// 参数3 = Request['参数3'];
// 参数N = Request['参数N'];


```


## 使用正则表达式
正则表达式可以被用于 `RegExp` 的 `exec` 和 `test` (en-US) 方法以及 String 的 `match` (en-US)、`replace`、`search` (en-US) 和 `split` (en-US) 方法。这些方法在 JavaScript 手册中有详细的解释。

### 使用正则表达式的方法


|方法|	描述|
 | --------   | :-----  |
|exec|	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。|
|test|	一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。|
|match|	一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。|
|matchAll|	一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。|
|search	|一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。|
|replace|	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。|
|split|	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。|

    在设置了 global 或 sticky 标志位的情况下（如 /foo/g or /foo/y），JavaScript RegExp 对象是有状态的。他们会将上次成功匹配后的位置记录在 lastIndex 属性中

当你想要知道在一个字符串中的一个匹配是否被找到，你可以使用 `test` 或 `search` 方法；想得到更多的信息（但是比较慢）则可以使用 `exec` 或 `match` 方法。如果你使用exec 或 match 方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么 exec 方法返回 `null`（也就是false）。

### string.match() 方法检索返回一个字符串匹配正则表达式的结果
    - 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
    - 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性
    - 如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果
    - 如果你想要获得捕获组，并且设置了全局标志，你需要用 RegExp.exec()  或者  String.prototype.matchAll()

### replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。
  
  模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。
原字符串不会改变

### 回调函数的参数：

|变量名	| 代表的值 |
 | --------   | -----  | 
 |match|	匹配的子串。（对应于上述的$&。）|
 |p1,p2, ...	 |假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。 |
 |offset	 |匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 'abcd'，匹配到的子字符串是 'bc'，那么这个参数将会是 1） |
 |string |	被匹配的原字符串。NamedCaptureGroup	命名捕获组匹配的对象 |



 使用正则来划分带有多种行结束符和换行符的文本
对于不同的平台（Unix，Windows等等），其默认的行结束符是不一样的. 而下面的划分方式适用于所有平台。
```
let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
let lines = text.split(/\r\n|\r|\n/)
console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
```