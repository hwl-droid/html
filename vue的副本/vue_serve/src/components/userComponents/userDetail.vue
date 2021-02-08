<template>
  <div class="userdetail">
    <div>
      <div class="user_img">
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img" />
        <img src="@/assets/github.svg" alt="" v-else />
      </div>
      <div class="user_edit">
        <div>
          <p>
            <span>1</span>
            <span class="user_text">粉丝</span>
          </p>
          <span class="I"> | </span>
          <p>
            <span>1</span>
            <span class="user_text">关注</span>
          </p>
          <span class="I">|</span>
          <p>
            <span>1</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div @click="$router.push('/edit')">
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{ userInfo.name }}</h2>
      <p v-if="userInfo.user_desc">{{ userInfo.user_desc }}</p>
      <p v-else>这个人很什么，什么都没写</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfo"]
};
</script>

<style lang="less" scoped>
.userdetail {
  background-color: white;
  padding: 0 3.333vw;
  > div:nth-child(1) {
    display: flex;
    .user_img {
      margin-right: 5.556vw;
      img {
        height: 23.611vw;
        width: 23.611vw;
        border-radius: 50%;
      }
    }
    .user_edit {
      flex: 1;
      margin-top: 2.778vw;
      div:nth-child(1) {
        display: flex;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 3.611vw;
          .user_text {
            color: #aaa;
          }
        }
      }
      .I {
        color: #aaa;
        margin-top: 2.778vw;
      }
      div:nth-child(2) {
        margin-top: 2.778vw;
        padding: 0.556vw 10.001px;
        .user_editBtn {
          border: 0.278vw solid #fb7a9f;
          padding: 0.833vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fb7a9f;
          border-radius: 1.111vw;
        }
      }
    }
  }
  >div:nth-child(2){
    h2{
      margin: 10px 0 3px 0;
      font-weight: 400;
    }
    p{
      margin: 0;
      padding: 0;
      color: #999;
    }
  }
}
</style>
