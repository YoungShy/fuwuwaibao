<template>
  <div class="ArticleInfo">
    <el-tabs class="ArticleInfo">
      <el-tab-pane label="作品原文" class="clearfix">
        <el-popover ref="popover" placement="left" width="400" trigger="click" v-model="trig">
          <div style="margin-bottom:10px;">
            {{text}}
          </div>
          <el-input type="textarea" :rows="3" placeholder="输入批注" v-model="textarea">
          </el-input>
          <el-button @click="addNote" type="primary" icon="el-icon-search" size="small" round plain style="margin:10px; float:right;">确认</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" round plain style="margin:10px; float:right;">删除</el-button>
        </el-popover>
        <el-button @click="tryToAddNote" v-popover:popover type="text" style="position: absolute; right:20px;">添加批注</el-button>
        <el-button @click="tryToDelteNote" type="text" style="position: absolute; right:20px; top:30px; color:red;">删除批注</el-button>
        <el-button @click="tryToDelteNote" type="text" style="position: absolute; right:20px; bottom:5px;">保存修改</el-button>
        <div class="ArticleInfo-title">
          <b>{{title}}</b>
        </div>
        <br>
        <div class="ArticleInfo-author">
          <span>{{author}}</span>
        </div>
        <br>
        <div v-html="contents" id='contents' style="padding-bottom:50px;"></div>
      </el-tab-pane>
      <el-tab-pane label="词语注释">
        <div v-html="annotation"></div>
      </el-tab-pane>
      <el-tab-pane label="创作背景">
        <div v-html="creativeBackground"></div>
      </el-tab-pane>
      <el-tab-pane label="批注历史">
        <div v-for="note in notes" :key="note.id">
          <el-tooltip effect="light" :id="note.id">
            <span class="ArticleInfo-blue">{{note.contents}}</span>
            <b slot="content">{{note.note}}</b>
          </el-tooltip>
          <div>
            <p class="ArticleInfo-blue">{{note.contents}}</p>
            <p slot="content">{{note.note}}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="推荐批注">
        <el-dropdown trigger="click" style="position: absolute; right:20px; top:10px; color:#000;">
          <span class="el-dropdown-link">
            读者批注
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>杨帅</el-dropdown-item>
            <el-dropdown-item>赵思鹏</el-dropdown-item>
            <el-dropdown-item>闭文丰</el-dropdown-item>
            <el-dropdown-item>沈孙峰</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="ArticleInfo-title">
          <b>{{title}}</b>
        </div>
        <br>
        <div class="ArticleInfo-author">
          <span>{{author}}</span>
        </div>
        <br>
        <div v-html="contents" id='contents' style="padding-bottom:50px;"></div>
      </el-tab-pane>
      <el-tab-pane label="搜索批注">
        <el-card class="clearfix">
          <el-input type="textarea" :rows="3" placeholder="请输入文本查找对应批注" v-model="textarea">
          </el-input>
          <el-button type="primary" icon="el-icon-search" round plain style="margin:15px; float:right;">搜索</el-button>
          <el-button type="danger" icon="el-icon-delete" round plain style="margin:15px; float:right;">删除</el-button>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "ArticleInfo",
    components: {},
    data() {
      return {
        textarea: '',
        text: '',
        obj: '',
        trig: false
      }
    },
    computed: {
      title: function () {
        return this.$store.state.article.title
      },
      author: function () {
        return this.$store.state.article.author
      },
      contents: function () {
        return this.$store.state.article.contents
      },
      annotation: function () {
        return this.$store.state.article.annotation
      },
      creativeBackground: function () {
        return this.$store.state.article.creativeBackground
      },
      notes: function () {
        return this.$store.state.notes
      },
      note: function () {
        return this.$store.state.note
      }
    },
    watch: {
      notes: function () {}
    },
    methods: {
      addNote: function () {
        let noteInfo = {
          title: this.$store.state.article.title,
          name: this.$store.state.name,
          contents: this.text,
          note: this.textarea
        }
        let notesInfo = {
          title: this.$store.state.article.title,
          name: this.$store.state.name,
        }
        this.$store.dispatch('createNotes', noteInfo).then(() => {
            this.$store.dispatch('findNotes', notesInfo)
          })
          .then(() => {
            setTimeout(() => {
              let node = document.getElementById(this.note.id)
              console.log(this.note)
              this.trig = false
              this.obj.deleteContents()
              this.obj.insertNode(node)
            }, 100)
          })
      },
      tryToAddNote: function () {
        this.obj = window.getSelection().getRangeAt(0)
        this.text = window.getSelection().toString()
      },
      tryToDelteNote: function () {
        this.obj = window.getSelection().getRangeAt(0)
        let node = document.createElement('span')
        let text = this.obj.toString()
        text = document.createTextNode(text)
        node.appendChild(text)
        let id = this.obj.endContainer.parentElement.id
        let oldNode = document.getElementById(id)
        oldNode.parentNode.replaceChild(node, oldNode)
        console.log(document.getElementById('contents'))
      }
    }
  };

</script>

<style>
  .ArticleInfo-title {
    text-align: center;
  }

  .ArticleInfo-author {
    text-align: center;
  }

  .ArticleInfo-el-card {
    margin-top: 10px;
  }

  .ArticleInfo-blue {
    color: blue;
  }

</style>

