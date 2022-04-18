| 方法 | 描述 | 知识点 |
 | --------   | :-----  | :---- |
 | Object.create() | 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__ | 可以实现继承 |
  | hasOwnProperty()| 回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。不包括继承属性 | //防止重写({}).hasOwnProperty.call(foo, 'bar'); // true或者 Object.prototype.hasOwnProperty.call(foo, 'bar');|
| propertyIsEnumerable() | 返回一个布尔值，表示指定的属性是否可枚举（自有属性） | 知识点 |
| getOwnPropertyDescriptor() | 回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）（自有属性） | 如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。包括（继承属性和不存在的属性也是undefined） |
| getOwnPropertyDescriptors() | 用来获取一个对象的所有自身属性的描述符（自有属性） | 所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象 |
 | Object.getPrototypeOf() | 返回指定对象的原型（内部[[Prototype]]属性的值）| 可给定对象的原型。如果没有继承属性，则返回 null 。 |
  | Object.assign() | 将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。| 只会拷贝源对象自身的并且可枚举的属性到目标对象，同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型，Object.assign()会触发setter，而展开操作符{...}则不会 |
  | Object.defineProperty() | 将直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象，不能修改继承属性| 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除 |
   | Object.defineProperties() | 直接在一个对象上定义新的属性或修改现有属性，并返回该对象|  |
   | Object.isPrototypeOf() |方法用于测试一个对象是否存在于另一个对象的原型链上|  |
   | instanceof | object instanceof constructor,运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上,instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上|  |
   | JSON.stringify() | 将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性|  |
    | JSON.parse() | 解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)|  |







| 运算符 | 描述 | 知识点 |
 | --------   | :-----  | :---- |
  | in | 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true（自有属性和继承属性） | Result |
 | for...in | 以任意顺序遍历一个对象的除Symbol以外的可枚举属性（可以枚举的自有属性和继承属性） | Result |
 | Object.getOwnPropertyNames() |返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组 | Result |
| Object.keys() |返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。| Result |
| Object.entries() |返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。| Result |
| Object.values() |返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )| Result |


## 描述符默认值汇总
- 拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
- 属性值和函数的键 value、get 和 set 字段的默认值为 undefined。

## 描述符可拥有的键值
| | configurable| 	enumerable| 	value	| writable| 	get| 	set|
 | --------   | :-----  | :---- | :---- | :---- | :---- | :---- |
||数据描述符|	可以|	可以|	可以	|可以|	不可以|	不可以|
||存取描述符|	可以|	可以|	不可以|	不可以	|可以|	可以|

如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。

如果属性已经存在，`Object.defineProperty()`将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果旧描述符将其`configurable` 属性设置为`false`，则该属性被认为是“不可配置的”，并且没有属性可以被改变（除了单向改变 writable 为 false）。当属性不可配置时，不能在数据和访问器属性类型之间切换。

当试图改变不可配置属性（除了 value 和 writable 属性之外）的值时，会抛出TypeError，除非当前值和新值相同

## 对象字面量表示法与JSON
对象字面量表示法和 JavaScript Object Notation（JSON）是不同的。虽然他们看起来相似，不同点有：

- JSON 只允许"property": value syntax形式的属性定义。属性名必须用双引号括起来。且属性定义不允许使用简便写法。
- JSON中，属性的值仅允许字符串，数字，数组，true，false，null或其他（JSON）对象。 
- JSON中，不允许将值设置为函数。
 - Date 等对象，经JSON.parse()处理后，会变成字符串。
- JSON.parse() 不会处理计算的属性名，会当做错误抛出。

```
  if (obj !== Object(obj))//判断obj是否为非null对象
        throw new TypeError('Object.values called on a non-object');
```
在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Object.prototype继承属性和方法。Object 构造函数为给定值创建一个对象包装器。Object构造函数，会根据给定的参数创建对象，具体有以下情况：

如果给定值是 null 或 undefined，将会创建并返回一个空对象
如果传进去的是一个基本类型的值，则会构造其包装类型的对象
如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址
当以非构造函数形式被调用时，Object 的行为等同于 new Object()。

```
判断一个变量是否为{}控对象
obj!=null&&typeOf obj==='object'&&!Object.keys(obj).length;

```
    通过使用Array.isArray(myObj) 或者Object.prototype.toString.call(myObj) === "[object Array]" 来安全的检测传过来的对象是否是一个数组。

JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null


## JSON.stringify()将值转换为相应的JSON格式：

- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如
JSON.stringify(function(){}) or JSON.stringify(undefined).
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
- 不可枚举的属性默认会被忽略：

## 深度拷贝
```
var obj={};
var deepCopy=JSON.parse(JSON.stringify(obj))
```
