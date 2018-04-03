/**
 * 批注业务操作
 */

const notesModel = require('./../models/notes')

const notes = {

  /**
   * 创建批注
   * @param  {object} notes 批注信息
   * @return {object}      创建结果
   */
  async create( notes ) {
    let result = await notesModel.createNotes(notes)
    return result
  },

  /**
   * 根据用户名和标题查找文章业务操作
   * @param  {object} options 查找条件参数
   * @return {object|null}     查找结果
   */
  async getNotesInfoByTitleAndName( options ) {
    
    let resultData = await notesModel.getNotesInfoByTitleAndName( options ) || {}
    let notesInfo = resultData
    /*
    let notesInfo = {
      contents: resultData.contents,
      name: resultData.name,
      title: resultData.title,
      number: resultData.number,
      note: resultData.note
    }
    */
    return notesInfo
  }
}

module.exports = notes
