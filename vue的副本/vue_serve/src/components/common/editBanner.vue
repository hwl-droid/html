<template>
  <div>
    <div class="editBanner">
      <span>{{ left }}</span>
      <span>{{ middle }}</span>
      <span><slot name="right"/></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["left","middle"]
};
</script>

<style lang="less">
.editBanner {
  background-color: white;
  padding: 4.167vw;
  border-bottom: 0.278vw solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 3.611vw;
  align-items: center;
  color: rgb(126, 125, 125);
}
</style>