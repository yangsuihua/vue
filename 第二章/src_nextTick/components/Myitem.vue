<template>
<li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
           <span v-show="!todo.isEdit">{{todo.title}}</span>
			<input 
				type="text" 
				v-show="todo.isEdit" 
				:value="todo.title" 
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
			>
          </label>
          <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
          <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
        
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Myitem',
    props:['todo'],
    methods:{
      //勾选or取消勾选
      handleCheck(id){
        console.log(id)
        this.$bus.$emit('checkTodo',id)
      },
      //删除
      handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					// this.$bus.$emit('deleteTodo',id)
				pubsub.publish('deleTodo',id)
        }
      },
      	//编辑
     handleEdit(todo){
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					// console.log('@')
					this.$set(todo,'isEdit',true)
				}
        //渲染dom完毕后执行
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
      //失去焦点回调（真正执行修改逻辑）
      handleBlur(todo,e){
        todo.isEdit=false
        console.log(e.target.value.trim())
        if(!e.target.value.trim())return alert('输出不能为空')
        this.$bus.$emit('updateTodo',todo.id,e.target.value)

      }
    }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>