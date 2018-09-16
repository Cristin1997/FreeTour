const router = require('koa-router')()
const controller = require('./controller.js')

router.get('/register', controller.renderIndex)

module.exports = router