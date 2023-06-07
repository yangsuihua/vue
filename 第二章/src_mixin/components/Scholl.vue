<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
   
  </div>
</template>

<script>
import {hunhe,hunhe2}  from '../mixin.js'
export default {
  name: "Scholl",
  data() {
    return {
      name: '尚硅谷',
      address: '广东广州',
      x:666
    };
  },
   mixins:[hunhe,hunhe2],
   
    
};
</script>

