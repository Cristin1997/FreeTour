// 渲染页面
exports.renderIndex = async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
}