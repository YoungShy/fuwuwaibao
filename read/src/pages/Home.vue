<template>
  <div class="Home">
    <el-container>
      <el-header class="Home-el-header">
        <!--批注搜索人口-->
        <!--
        <el-card class="Home-el-card">
          <el-input type="textarea" :rows="3" placeholder="请输入文本查找对应批注" v-model="textarea">
          </el-input>
          <el-button class="Home-el-button" type="danger" icon="el-icon-delete" round plain>删除</el-button>
          <el-button class="Home-el-button" type="primary" icon="el-icon-search" round plain>搜索</el-button>
        </el-card>
        -->
        <el-card class="Home-el-card">
          <el-button style="padding: 2px 10px; color:#111;" type="text">
            <i class="el-icon-zoom-out"></i>搜文章</el-button>
          <el-button style="padding: 2px 10px; color:#111;" type="text">
            <i class="el-icon-zoom-in"></i>搜批注</el-button>
          <el-button style="padding: 2px 10px; color:#111;" type="text">
            <i class="el-icon-view"></i>优秀读者排行</el-button>
          <el-button style="padding: 2px 10px; color:#111;" type="text">
            <i class="el-icon-document"></i>热门图书排行</el-button>
        </el-card>
      </el-header>
      <el-main class="Home-el-main">
        <el-card class="Home-recommend">
          <div slot="header">
            <span>推荐文章</span>
          </div>
          <!--暂时死页面，留待以后完成热门文章推荐功能-->
          <el-collapse>
            <el-collapse-item title="匆匆" name="1">
              <p>《匆匆》是现代杰出的散文家朱自清写的一篇脍炙人口的散文。文章紧扣“匆匆”二字，细腻地刻画了时间流逝的踪迹，表达了作者对时光流逝的无奈和惋惜。文章的特点：一是结构精巧，层次清楚，转承自然，首尾呼应；二是文字清秀隽永，纯朴简练；三是情景交融，无论是写燕子、杨柳、桃花，还是写太阳，都与“我们的日子为什么一去不复返呢”的感叹融为一体，处处流露出作者对时光流逝感到无奈和惋惜。</p>
              <el-button @click="read()" style="padding: 3px 0;" type="text">开始阅读</el-button>
            </el-collapse-item>
            <el-collapse-item title="春" name="2">
              <p>《春》是现代散文家朱自清的作品。《春》是朱自清的散文名篇，最初发表于1933年7月，此后长期被中国中学语文教材选用。[1] 在该篇“贮满诗意”的“春的赞歌”中，事实上饱含了作家特定时期的思想情绪、对人生及至人格的追求，表现了作家骨子里的传统文化积淀和他对自由境界的向往。1927年之后的朱自清，始终在寻觅着、营造着一个灵魂深处的理想世界——梦的世界，用以安放他“颇不宁静”的拳拳之心，抵御外面世界的纷扰，使他在幽闭的书斋中“独善其身”并成就他的治学。《春》描写、讴歌了一个蓬蓬勃勃的春天，但它更是朱自清心灵世界的一种逼真写照。</p>
              <el-button @click="read()" style="padding: 3px 0;" type="text">开始阅读</el-button>
            </el-collapse-item>
            <el-collapse-item title="背影" name="3">
              <p>《背影》是现代作家朱自清于1925年所写的一篇回忆性散文。这篇散文叙述的是作者离开南京到北京大学，父亲送他到浦口火车站，照料他上车，并替他买橘子的情形。在作者脑海里印象最深刻的，是他父亲替他买橘子时在月台爬上攀下时的背影。作者用朴素的文字，把父亲对儿女的爱，表达得深刻细腻，真挚感动，从平凡的事件中，呈现出父亲的关怀和爱护。</p>
              <el-button @click="read()" style="padding: 3px 0;" type="text">开始阅读</el-button>
            </el-collapse-item>
            <el-collapse-item title="荷塘月色" name="4">
              <p>《荷塘月色》是中国文学家朱自清任教清华大学时所写的一篇散文，因收入中学语文教材而广为人知，是现代抒情散文的名篇。文章写了荷塘月色美丽的景象，含蓄而又委婉地抒发了作者不满现实，渴望自由，想超脱现实而又不能的复杂的思想感情，为后人留下了旧中国正直知识分子在苦难中徘徊前进的足迹。寄托了作者一种向往于未来的政治思想，也寄托了作者对荷塘月色的喜爱之情。</p>
              <el-button @click="read()" style="padding: 3px 0;" type="text">开始阅读</el-button>
            </el-collapse-item>
          </el-collapse>
        </el-card>
        <br>
        <!--暂时死页面，留待以后完成优秀读者推荐功能-->
        <el-card class="Home-reader">
          <div slot="header">
            <b>优秀读者</b>
          </div>
          <el-collapse>
            <el-collapse-item title="杨帅" name="5">
              <span>最近批注</span>
              <p>《匆匆》，《荷塘月色》，《背影》，《春》</p>
              <span>最近一月累计获得</span>
              <p>42个赞，21个收藏</p>
              <el-button style="padding: 3px 0;" type="text">个人主页</el-button>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {},
    data() {
      return {
        textarea: ""
      };
    }
  };

</script>

<style>
  .Home {
    position: absolute;
    background-color: #ededef;
    width: 100%;
    min-height: 100%;
    height: auto;
    z-index: -1;
  }

  .Home-el-button {
    float: right;
    margin-top: 15px;
    margin-left: 15px;
  }

  .Home-el-header {
    width: 1200px;
    height: auto;
    margin: auto;
    margin-top: 20px;
  }

  .Home-el-card {
    height: auto;
    font-size: 24px;
  }

  .Home-el-main {
    width: 1200px;
    height: auto;
    margin: auto;
    margin-top: 20px;
  }

</style>

