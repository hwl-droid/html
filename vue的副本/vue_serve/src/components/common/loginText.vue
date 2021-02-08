<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "rule"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    handlerUlg() {
      const rue = new RegExp(this.rule); //new RegExp 字符串转换正则
      if (rue.test(this.content)) {
        this.$emit('inputChange',this.content)
      }
    }
  },
  watch: {
    content() {
      this.handlerUlg();
    }
  }
};
</script>

<style></style>
