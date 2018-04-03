const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const articleController = require('./../controllers/article')
const notesController = require('./../controllers/notes')
const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/article/createArticle.json', articleController.createArticle)
  .post('/article/findArticle.json', articleController.findArticle)
  .post('/notes/findNotes.json', notesController.findNotes)
  .post('/notes/createNotes.json', notesController.createNotes)
module.exports = routers
