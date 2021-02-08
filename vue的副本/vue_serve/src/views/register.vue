<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/login')">登陆</div>
    </login-top>
    <!-- 中文名正则 -->
    <div style="margin: 4.167vw 0">
      <login-text
        label="姓名"
        placeholder="请输入中文姓名"
        :rule="nameRule"
        @inputChange="(res) => (model.name = res)"
      />
    </div>
    <!--正则：用户名校验，4到16位（字母，数字，下划线，减号） -->
    <login-text
      label="账号"
      placeholder="请输入6到16位（字母，数字，下划线，减号）"
      :rule="usernameRule"
      @inputChange="(res) => (model.username = res)"
    />
    <!-- 正则：最少6位，数字字母组成-->
    <login-text
      label="密码"
      placeholder="请输入最少6位，数字字母组成"
      type="password"
      :rule="passwordRule"
      @inputChange="(res) => (model.password = res)"
    />
    <login-btn btnText="注册" @registerSubmit="registerSubmit"> </login-btn>
  </div>
</template>

<script>
import loginTop from "../components/common/loginTop";
import loginText from "../components/common/loginText";
import loginBtn from "../components/common/loginBtn";
export default {
  data() {
    return {
      model: {
        name: "",
        username: "",
        password: ""
      },
      nameRule: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
      usernameRule: /^[a-zA-Z0-9_-]{6,16}$/,
      passwordRule: /^\S*(?=\S{6,})(?=\S*[a-z])\S*$/
    };
  },
  components: {
    loginTop,
    loginText,
    loginBtn,
  },
  methods: {
    async registerSubmit() {
      if (
        this.nameRule.test(this.model.name) &&
        this.usernameRule.test(this.model.username) &&
        this.passwordRule.test(this.model.password)
      ) {
        const res = await this.$http.post("/register", this.model);
        this.$msg.fail(res.data.msg);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.objtoken);
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000);
      } else {
        this.$msg.fail("格式不正确");
      }
    }
  }
};
</script>

<style></style>
