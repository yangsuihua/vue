//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import person from './person'
import count from './count'
//应用Vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
        person,count
    }
})