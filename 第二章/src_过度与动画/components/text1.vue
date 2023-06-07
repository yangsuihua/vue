<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
  <transition name="hello" appear>
    <h1 v-show="isShow">你好啊！</h1>
  </transition>
  
  </div>
</template>

<script>
export default {
    name:'text1',
    data(){
        return{
            isShow:true
        }
    },

}
</script>

<style>
h1{
		background-color: orange;
	}

    .hello-enter-active{
        animation: atguigu 0.5s linear;
    }
    .hello-leave-active{
        animation: atguigu 0.5s linear reverse;
    }
    @keyframes atguigu{
        from{
            transform: translate(-100%);
        }
        to{
            transform: translate(0px);
        }
    }
</style>