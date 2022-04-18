### JavaScript 中闭包的实际用途是什么？
###  使用私有变量和方法：在 JavaScript 中，我们可以使用闭包来使用私有变量和方法。下面的例子展示了私有变量和闭包的使用。
- JavaScript 仍然没有您的类的属性或方法的私有范围的概念，因此模拟这可能有助于保护您的代码并允许其他人正确使用您的库

示例：在此示例中，rentPrice()函数返回一个具有三个方法的对象：getRent()、incRent()和decRent()。这三个方法可以访问私有变量rent。但是，其作用域之外的代码不能直接访问这个变量。因此，我们可以在 JavaScript 中模仿面向对象的编程。
```JS
// Define the closure
var rentPrice = function(initialRent) {//模拟c#中的类
var rent = initialRent;

	// Define private variables for
	// the closure
	return {
	getRent: function() {
		return console.log(rent);
	},
	incRent: function(amount) {
		rent += amount;
		console.log(rent);
	},
	decRent: function(amount) {
		rent -= amount;
		console.log(rent);
	}
	}
}

var Rent = rentPrice(8000);

// Access the private methods
Rent.incRent(2000);
Rent.decRent(1500);
Rent.decRent(1000);
Rent.incRent(2000);
Rent.getRent();


```
```JS
function MyObject(fn, ln) {
    let fname = fn,
        lname = ln
        
    const getFullName = () => {
        return [fname, lname].join(" ")
    }

    const setFirstName = first => {
        fname = first
    }
    const setLastName = last => {
        lname = last
    }

    return {
        getFullName,
        setFirstName,
        setLastName
    }
}
```
### 在每次函数调用之间保持状态：假设有一个函数，并且想要将多个值相乘。这可以在全局变量的帮助下完成，因为它们可以在整个程序中访问。然而，一个缺点是它们很容易在代码的任何地方发生变化。这也可以使用闭包来完成。闭包有助于在不使用全局变量的情况下维护函数调用之间的状态。

```JS
(function() {

var multFn = function multiply() {
	// This variable is local to
	// the closure and holds
	// its value inbetween
	// multiple calls
var mult = 9;
return function(val) {
	mult = mult * val;
	return mult;
}
};

var mult = multFn();

// Call the method
// multiple times
console.log(mult(2));
console.log(mult(3));
console.log(mult(5));
}());


```
我在 Stack Overflow 上看到的最常见的问题是有人想要“延迟”使用在每个循环中增加的变量，但是因为变量是有作用域的，所以对该变量的每个引用都将在循环结束之后，导致变量的结束状态：
```JS
for (var i = 0; i < someVar.length; i++)
    window.setTimeout(function () {
        alert("Value of i was "+i+" when this timer was set" )
    }, 10000);
```
这将导致每个警报显示相同的值i，即循环结束时增加的值。解决方案是创建一个新的闭包，一个单独的变量作用域。这可以使用立即执行的匿名函数来完成，该函数接收变量并将其状态存储为参数：
- 创建一个新的上下文来包装函数，因此实际上，每次创建函数时，我们都会创建一个新的作用域，其中包含新变量和闭包。每次创建后者时，它只会与该特定范围相关联
```JS
for (var i = 0; i < someVar.length; i++)
    (function (i) {
        window.setTimeout(function () {
            alert("Value of i was " + i + " when this timer was set")
        }, 10000);
    })(i);
    ```