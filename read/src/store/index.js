import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false, //是否登录
    name: '', //名字
    pictureUrl: '', //个人头像图片地址
    article: {
      title: '',
      author: '',
      summary: '',
      contents: '',
      annotation: '',
      creativeBackground: ''
    },
    notes: [],
    note: ''
  },
  mutations: {
    changeIsLogin(state) {
      state.isLogin = true
    },
    setName(state, name) {
      state.name = name
    },
    setArticle(state, article) {
      state.article.title = article.title
      state.article.author = article.author
      state.article.summary = article.summary
      state.article.contents = article.contents
      state.article.annotation = article.annotation
      state.article.creativeBackground = article.creativeBackground
    },
    setNotes(state, notes) {
      state.notes = notes
    },
    setNote(state, note){
      state.note = note
    }
  },
  actions: {
    signIn(context, userInfo) {
      axios
        .post("http://localhost:3001/user/signIn.json", userInfo)
        .then(response => {
          console.log(response);
          if (response.data.success === false) {
            this.$alert(response.data.message, "登陆失败", {confirmButtonText: "确定"});
          } else {
            context.commit("changeIsLogin");
            context.commit("setName", response.data.name);
          }
        })
        .catch(error => {
          console.log(error);
          alert("服务器故障！");
        });
    },
    signUp(context, userInfo) {
      axios
        .post("http://localhost:3001/user/signUp.json", userInfo)
        .then(response => {
          if (response.data.success == false) {
            alert(response.data.message);
          } else {
            alert("注册成功");
            context.commit("changeIsLogin");
            context.commit("setName", userInfo.name);
          }
        })
        .catch(error => {
          console.log(error);
          alert("服务器故障！");
        });
    },
    findArticle(context, bookInfo) {
      axios
        .post("http://localhost:3001/article/findArticle.json", bookInfo)
        .then(response => {
          if (response.data.success === false) {
            alert(response.data.message, "查询失败", {confirmButtonText: "确定"});
          } else {
            console.log(response.data)
            context.commit("setArticle", response.data);
          }
        })
        .catch(error => {
          console.log(error);
          alert("服务器故障！");
        });
    },
    findNotes(context, notesInfo) {
      axios
        .post("http://localhost:3001/notes/findNotes.json", notesInfo)
        .then(response => {
          console.log(response);
          if (response.data.success === false) {
            alert(response.data.message, "查询失败", {confirmButtonText: "确定"});
          } else {
            console.log(response.data)
            context.commit("setNotes", response.data);
          }
        })
        .catch(error => {
          console.log(error);
          alert("服务器故障！");
        });
    },
    createNotes(context, noteInfo) {
      axios
        .post("http://localhost:3001/notes/createNotes.json", noteInfo)
        .then(response => {
          console.log(response);
          if (response.data.success === false) {
            alert(response.data.message, "添加失败", {confirmButtonText: "确定"});
          } else {
            let data = response.config.data
            data = JSON.parse(data)
            console.log(data)
            let note = {
              title: data.title,
              contents: data.contents,
              note: data.note,
              name: data.name,
              id: response.data.insertId
            }
            context.commit('setNote', note)
          }
        })
        .catch(error => {
          console.log(error);
          alert("服务器故障！");
        });
    }
  },
  getters: {}
})
