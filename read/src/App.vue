<template>
  <div>
    <TopNav>
    </TopNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from "./components/TopNav"

  export default {
    components: {
      TopNav
    }
  }

</script>

<style>
  body,
  html {
    padding: 0;
    margin: 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .para {
    font-size: 14px;
    word-wrap: break-word;
    color: #333;
    margin-bottom: 15px;
    text-indent: 2em;
    line-height: 24px;
    zoom: 1;
  }

</style>

