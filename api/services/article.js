/**
 * 文章业务操作
 */

const articleModel = require('./../models/article')

const article = {

  /**
   * 创建文章
   * @param  {object} article 用户信息
   * @return {object}      创建结果
   */
  async create( article ) {
    let result = await articleModel.createArticle(article)
    return result
  },

  /**
   * 根据标题查找文章业务操作
   * @param  {string} title 标题
   * @return {object|null}     查找结果
   */
  async getArticleInfoByTitle( title ) {
    
    let resultData = await articleModel.getArticleInfoByTitle( title ) || {}
    let articleInfo = {
      contents: resultData.contents,
      author: resultData.author,
      summary: resultData.summary,
      title: resultData.title,
      annotation: resultData.annotation,
      creativeBackground: resultData.creativeBackground
    }
    return articleInfo
  }
}

module.exports = article
