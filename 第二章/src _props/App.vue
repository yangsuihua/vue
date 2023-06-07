<template>
  <div >
    <img alt="logo" src="./assets/logo.png">
   <!-- age前面的冒号，可以用vue的bind属性，让他变成数字形式 -->
   <Student name="李四" sex="女" :age="18"></Student>
  </div>
</template>

<script>

import Student from './components/Student.vue'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    Student
    
  },
  methods:{
  
  }
}
</script>

