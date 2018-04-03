<template>
  <div class="Bookshelf">
    <el-container>
      <el-header class="Bookshelf-el-header" height="160">
        <el-card class="Bookshelf-el-card">
          <el-input class="Bookshelf-el-input" type="input" :rows="3" placeholder="请输入文章标题" v-model="input">
          </el-input>
          <el-button @click="submitTitle(input)" class="Bookshelf-el-button" type="primary" icon="el-icon-search" round plain>搜索</el-button>
        </el-card>
      </el-header>
      <el-main class="Bookshelf-el-main">
        <el-card v-if="title != ''">
          <div slot="header" class="clearfix">
            <span>{{title}}</span>
            <el-button @click="read()" style="float: right; padding: 3px 0" type="text">开始阅读</el-button>
          </div>
          <div v-html="summary">
          </div>
        </el-card>
        <!--书架全部图书涮选功能
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="title" label="标题"  width="180">
          </el-table-column>
          <el-table-column prop="author" label="作者" width="180">
          </el-table-column>
          <el-table-column prop="summary" label="概述">
          </el-table-column>
        </el-table>
        -->

      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Bookshelf",
    components: {},
    data() {
      return {
        input: "",
        tableData: [{
          title: '匆匆',
          author: '朱自清',
          summary: '《匆匆》是现代杰出的散文家朱自清写的一篇脍炙人口的散文。文章紧扣“匆匆”二字，细腻地刻画了时间流逝的踪迹，表达了作者对时光流逝的无奈和惋惜。文章的特点：一是结构精巧，层次清楚，转承自然，首尾呼应；二是文字清秀隽永，纯朴简练；三是情景交融，无论是写燕子、杨柳、桃花，还是写太阳，都与“我们的日子为什么一去不复返呢”的感叹融为一体，处处流露出作者对时光流逝感到无奈和惋惜。'
        }]
      };
    },
    computed: {
      title: function () {
        return this.$store.state.article.title
      },
      summary: function () {
        return this.$store.state.article.summary
      }
    },
    methods: {
      submitTitle(input) {
        let bookInfo = {
          'title': input
        }
        this.$store.dispatch('findArticle', bookInfo)
      },
      read() {
        let notesInfo = {
          title: this.$store.state.article.title,
          name: this.$store.state.name,
        }
        this.$store.dispatch('findNotes', notesInfo).then(() => {
          this.$router.push({
            name: "Read"
          })
        })
      },
    }
  };

</script>
<style>
  .Bookshelf {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: -1;
  }

  .Bookshelf-el-button {
    float: right;
    margin: 15px;
  }

  .Bookshelf-el-header {
    width: 1200px;
    height: 160px;
    margin: auto;
    margin-top: 20px;
  }

  .Bookshelf-el-main {
    width: 1200px;
    margin: auto;
  }

</style>

