const notesService = require('./../services/notes')
const notesCode = require('./../codes/notes')

module.exports = {
    /**
     * 根据用户名和标题查找操作
     * @param  {obejct} ctx 上下文对象
     */
    async findNotes(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        console.log(formData)
        let notesResult = await notesService.getNotesInfoByTitleAndName(formData)
        let len = notesResult.length
        if (len) {
            result.success = true
        }
        console.log(notesResult)
        ctx.body = notesResult
    },

    /**
     * 创建操作
     * @param   {obejct} ctx 上下文对象
     */
    async createNotes(ctx) {
        let formData = ctx.request.body
        console.log(formData)
        let result = {
            success: false,
            message: '',
            data: null
        }
        let notesResult = await notesService.create({
            title: formData.title,
            name: formData.name,
            contents: formData.contents,
            note: formData.note
        })
        console.log(notesResult)
        if(notesResult.id != ''){
            result.success = true
        }
        ctx.body = Object.assign(result, notesResult)
    }
}
