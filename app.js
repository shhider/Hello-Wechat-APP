/**
 * App方法用来注册一个小程序
 * 指定小程序各生命周期的响应，以及其他全局的属性和函数
 *
 * 注意点：
 * - App() 必须在 app.js 中注册，且不能注册多个；
 * - 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例;
 * - 不要在 onLaunch 的时候调用 getCurrentPage()，此时 page 还没有生成；
 * - 通过 getApp() 获取实例之后，不要私自调用生命周期函数。
 */
App({
    // 小程序初始化完成时触发
    onLaunch: function() {
        console.log('---onLaunch');
    },
    // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onShow: function() {
        console.log('---onShow');
    },
    // 当小程序从前台进入后台时触发
    onHide: function() {
        console.log('---onHide');
    },
    globalData: 'I am global data'
});
