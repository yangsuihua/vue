<template>
  <ul class="todo-main">
        <Myitem v-for="todoObj in todos" :key="todoObj.id"
        :todo="todoObj"
        ></Myitem>
      </ul>
</template>

<script>
import Myitem from './Myitem'
export default {
name:'Mylist',
components:{Myitem},
props:['todos']
}
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>