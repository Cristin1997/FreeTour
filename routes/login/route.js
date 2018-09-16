const router = require('koa-router')()
const controller = require('./controller.js')

router.get('/login', controller.renderIndex)

module.exports = router