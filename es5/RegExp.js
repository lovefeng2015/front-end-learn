var re="a\*b";
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    //$&表示整个被匹配的字符串
  }
var reStr=escapeRegExp(re);
console.log(reStr);
var reObj=new RegExp(reStr);