const router = require('koa-router')()
const controller = require('./controller.js')

router.get('/', controller.renderIndex)

router.get('/homepage/allLine',controller.getAllLine)

module.exports = router