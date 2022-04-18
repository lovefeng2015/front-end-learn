//暴露一个对象
module.exports={
    msg:'module1',
    foo:function () {
        console.log(this.msg);
    }
}