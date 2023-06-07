<template>
  <div >
    <img alt="logo" src="./assets/logo.png">
      <h1 v-text="msg" ref="title"></h1>
     <Scholl ref="sch"></Scholl>
     <button ref="btn" @click="showDom">点我输出上方dom元素</button>

  </div>
</template>

<script>

import Scholl from './components/Scholl.vue'

export default {
  name: 'App',
  components: {
    Scholl
  },
  methods:{
    showDom(){
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
}
</script>

