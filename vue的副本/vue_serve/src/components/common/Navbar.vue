<template>
  <div class="navbar">
    <div class="logo"><img src="../../assets/bilibili.jpg" /></div>
    <div>
      <p><van-icon class="inp-ioc" name="search" />请输入您要搜索的内容</p>
    </div>
    <div>
      <img src="../../assets/github.svg" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.navbar {
  height: 12.5vw;
  background-color: white;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    img {
      width: 100%;
      height: 95%;
      border-bottom: 1px solid #fa9efa;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 1.389vw;
    p {
      height: 7.222vw;
      line-height: 7.222vw;
      font-size: 3.333vw;
      padding-left: 6.389vw;
      background-color: #f4f4f4;
      width: 100%;
      border-radius: 3.611vw;
      position: relative;
      color: #aaa;
      .inp-ioc {
        position: absolute;
        left: 2.778vw;
        top: 50%;
        transform: translate(0, -40%);
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.667vw;
      height: 6.667vw;
    }
    p {
      padding: 1.389vw 2.778vw;
      margin: 0 1.389vw;
      color: white;
      background-color: #fb7299;
      font-size: 3.611vw;
      border-radius: 0.833vw;
    }
  }
}
</style>
