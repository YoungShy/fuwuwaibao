const articleService = require('./../services/article')
const articleCode = require('./../codes/article')

module.exports = {
    /**
     * 查找操作
     * @param  {obejct} ctx 上下文对象
     */
    async findArticle(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        console.log(formData)
        let articleResult = await articleService.getArticleInfoByTitle(formData)
        console.log(articleResult);
        if (articleResult.title == formData.title) {
            result.success = true
        } else {
            result.message = articleCode.FAIL_TITLE_NO_EXIST
            result.code = 'FAIL_TITLE_NO_EXIST'
        }
        console.log(result)
        ctx.body = Object.assign(result, articleResult)
    },

    /**
     * 创建操作
     * @param   {obejct} ctx 上下文对象
     */
    async createArticle(ctx) {
        let formData = ctx.request.body
        console.log(formData)
        let result = {
            success: false,
            message: '',
            data: null
        }
        let articleResult = await articleService.getArticleInfoByTitle(formData)
        if (articleResult) {
            result.message = articleCode.FAIL_TITLE_IS_EXIST
            result.code = 'FAIL_TITLE_IS_EXIST'
        } else {
            let articleResult = await articleService.create({
                title: formData.title,
                author: formData.author,
                summary: formData.summary,
                contents: formData.contents,
                annotation: formData.annotation,
                creativeBackground: formData.creativeBackground
            })
            if (articleResult) {
                result.success = true
            } else {
                result.message = userCode.ERROR_SYS
            }
        }
        console.log(articleResult)
        ctx.body = Object.assign(result, articleResult)
    }
}
