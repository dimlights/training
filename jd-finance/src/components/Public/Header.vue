<template>
  <div class="header">
    <span class="log">
      <a class="register">注册</a>&nbsp;|&nbsp;
      <a class="login">登陆</a>
    </span>
    <router-link class="appDownload" :to="{path:'/download'}">APP下载</router-link>
  </div>
</template>

<script type="text/emcascript6">
export default {
}
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  color: #666;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 100px;
  background: #fff url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') center center no-repeat;
  background-size: auto 50%;
  font-size: 32px;
  z-index: 100;

  .log {
    height: 30px;
    line-height: 30px;
    font-size: 28px;
    margin: 0 0 0 0.45rem;
    flex: 1;
  }

  .appDownload {
    display: inline-block;
    min-width: 120px;
    height: 56px;
    line-height: 56px;
    margin: 0 24px 0 0;
    font-size: 24px;
    text-decoration: none;
    border-radius: 4px;
    background-color: #F04752;
    text-align: center;
    color: #fff;
  }
}
</style>
