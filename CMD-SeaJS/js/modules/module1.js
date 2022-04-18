define(function(require,exports,module){
    let msg='module1';
    function foo(){
        return msg;
    }
    //暴露模块
    module.exports={foo};
});