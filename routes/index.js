// 路由层
const homepage = require('./homepage/route')
const login = require('./login/route')
const register = require('./register/route')
exports.route = (app => {
    app.use(homepage.routes(), homepage.allowedMethods())
    app.use(login.routes(), login.allowedMethods())
    app.use(register.routes(), register.allowedMethods())
})