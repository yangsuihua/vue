//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
	router,
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})