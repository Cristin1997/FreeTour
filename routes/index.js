// 路由层
const homepage = require('./homepage/route')

exports.route = (app => {
    app.use(homepage.routes(), homepage.allowedMethods())
})