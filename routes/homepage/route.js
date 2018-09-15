const router = require('koa-router')()
const controller = require('./controller.js')

router.get('/', controller.renderIndex)

module.exports = router