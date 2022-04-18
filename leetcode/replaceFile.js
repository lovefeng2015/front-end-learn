/*
 * @Author: yhf 
 * @Date: 2021-11-Th 09:23:31 
 * @Last Modified by:   yhf 
 * @Last Modified time: 2021-11-Th 09:23:31 
 */

/**
 * @name: 
 * @description: 把带-的文件名转化为驼峰的
 * @param {*} name
 * @return {*}
 */
var replaceFileName=function (name) {
    function upperCase(match,p1) {
        return p1.toUpperCase(p1)
    }
    return name.replace(/-(\w)/g,upperCase)
}
console.log(replaceFileName());