<template>
<div id="root">
   <div class="todo-container">
    <div class="todo-wrap">
  
      <Myhead @addTodo="addTodo"/>
				<Mylist :todos="todos" />
				<Myfoot :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
			
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
import Myhead from './components/Myhead'
import Myfoot from './components/Myfoot'
import Mylist from './components/Mylist'
export default {
      name:'App',
      components:{Mylist,Myhead,Myfoot},
      data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				todos:JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods: {
			//添加一个todo
			addTodo(todoObj){
				this.todos.unshift(todoObj,)
				
			},
			//勾选or取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			//删除一个todo
			deleteTodo(sb,id){
				console.log(sb)
				this.todos = this.todos.filter( todo => todo.id !== id )
				console.log(this.todos)
			},
			//全选or取消全选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			//清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			},
			updateTodo(id,title){
				this.todos.forEach((todo)=>{
					console.log("jinlaid ")
					if(todo.id===id)todo.title=title
				})

			}
		},
		watch: {
			todos:{
				deep:true,
				handler(value){
					localStorage.setItem('todos',JSON.stringify(value))
				}
			}
		},
		mounted(){
			this.$bus.$on('checkTodo',this.checkTodo)
			this.$bus.$on('updateTodo',this.updateTodo)
			// this.$bus.$on('deleteTodo',this.deleteTodo)
		this.publd=pubsub.subscribe('deleTodo',this.deleteTodo)
		},
		beforeDestroy(){
			this.$bus.$off('checkTodo')
			this.$bus.$off('updateTodo')
			// this.$bus.$off('deleteTodo')
			pubsub.unsubscribe(this.publd)
		}
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>