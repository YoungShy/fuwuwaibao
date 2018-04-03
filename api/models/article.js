const dbUtils = require('./../utils/db-util')

const article = {

  /**
   * 数据库创建文章
   * @param  {object} model 文章数据模型
   * @return {object}       mysql执行结果
   */
  async createArticle ( model ) {
    let result = await dbUtils.insertData( 'article', model )
    return result
  },
  /**
   * 根据文章标题查找文章
   * @param  {string} options 查找条件参数
   * @return {object|null}     查找结果
   */
  async getArticleInfoByTitle( options ) {
    let _sql = `
    SELECT * from article
      where title="${options.title}"
      limit 1`
    let result = await dbUtils.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
}


module.exports = article
