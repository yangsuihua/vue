<template>
  <div class="demo">
    <h2>学校名称：</h2>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Scholl",
  data() {
    return {
      name: '尚硅谷',
      address: '广东广州',
    };
  },

};
</script>

<style>
.demo {
  background-color: orange;
}
</style>