<template>
  <div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group name="hello" appear>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
export default {
name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}

</script >

<style scoped>
h1{
		background-color: orange;
	}

	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	.hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}

	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}

</style>