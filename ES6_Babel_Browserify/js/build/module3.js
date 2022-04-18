'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露
exports.default = {
    msg: '我是默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
};