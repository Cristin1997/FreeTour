const homepageDAO = require('../../model/homepage');

// 渲染页面（首页）
exports.renderIndex = async (ctx, next) => {
    let lineList = await homepageDAO.getAllLineList()  // 所有路线列表
    let travelList = await homepageDAO.getTravelList()  // 所有游记列表
    ctx.body = [travelList, lineList]

    // await ctx.render('index', {
    //     title: 'Hello Koa 2!',
    // })
}