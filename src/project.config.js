/**
 * @description webpack5
 * @author xuzhanbo
 * @time 2021-7-31
 * * */

const isProd = process.env.NODE_ENV === 'development'

module.exports = {
    // deployUrl: '127.0.0.0:8080', // 本地代码推推送到指定服务器
    proxyUrlMap: {
        '/api': 'localtion:3000', // 代理的接口关键字
        '/api2': 'localtion:4000', // 代理的接口关键字
    },
    port: 9001, // 端口号
    publicPath: isProd ? '/' : './',

};
