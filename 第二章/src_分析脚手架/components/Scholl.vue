<template>
  <div class="demo">
    <h2>学校名称：</h2>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showName">点我提示学习名</button>
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
  methods: {
    showName(){
      alert(this.name);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>