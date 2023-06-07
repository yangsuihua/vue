<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge+1}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我是一个学生',
            myAge:this.age
        }
    },
    props:['age','sex','name']
}
</script>

<style>

</style>