const dbUtils = require('./../utils/db-util')

const notes = {

  /**
   * 数据库创建批注
   * @param  {object} model 文章数据模型
   * @return {object}       mysql执行结果
   */
  async createNotes ( model ) {
    let result = await dbUtils.insertData( 'notes', model )
    return result
  },
  /**
   * 根据用户名和标题查找批注
   * @param  {object} options 查找条件参数
   * @return {object|null}     查找结果
   */
  async getNotesInfoByTitleAndName( options ) {
    console.log(options)
    let _sql = `
    SELECT * from notes
      where title="${options.title}" AND name="${options.name}"
    `
    let result = await dbUtils.query( _sql )
    console.log(result)
    return result
  },
}


module.exports = notes
