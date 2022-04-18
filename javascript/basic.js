var square = function (x) {
    return x * x;
}

function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

function factorial(n) {
    var product = 1;
    while (n > 1) {
        product *= n;
        n--;

    }
    return product;

}
function factorial2(n) 
{
    var i;product=1;
    for (i =2; i <= n; i++) {
        product *= i;  
    }
    return product;
}
function copyArray(a,b) {
    var length=a.length;
    for (let i = 0; i < length; i++) {
        b[i]=a[i];
        
    }
    return b;
    
}
function equalArrays(a,b) {
    if(!(Array.isArray(a)&&Array.isArray(b))){
        return false;
    }
    var length=a.length;
    if(length!=b.length){
        return false;
    }
    for (let i = 0; i < length; i++) {
       if(a[i]!=b[i]){
        return false;
       }
        
    }
    return true;
    
}
console.log(square(4));
console.log(abs(-5));
console.log(factorial(4));
console.log(factorial2(5));
var a=[1,2,3];
var b=[];
copyArray(a,b);
console.log(b);
var notArray={
    length:3
};
console.log(equalArrays(a,b));
console.log(equalArrays(a,notArray));
