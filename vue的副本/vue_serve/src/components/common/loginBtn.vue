<template>
  <div class="btn" @click="registerClick">
    <div class="loginBtn">{{ btnText }}</div>
  </div>
</template>

<script>
export default {
  props: ["btnText"],
  methods: {
    registerClick() {
      this.$emit("registerSubmit");
    }
  }
};
</script>

<style>
.btn {
  padding: 4.167vw 2.778vw;
}
.loginBtn {
  height: 12.5vw;
  background-color: #ff9db5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.444vw;
  border-radius: 6.25vw;
}
</style>
