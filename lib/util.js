/**
 * /lib/util
 * 小程序支持模块化，通过common.js风格进行模块管理
 */

function sayHello(name) {
    console.log('Hello ' + name + '!')
}

module.exports = {
    sayHello: sayHello
};
