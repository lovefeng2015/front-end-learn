define(function(require,exports,module){
    let data='module3';
    function fun(){
        console.log(data);
    }
    //暴露模块
    exports.module3={fun};
});