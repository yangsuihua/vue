export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log(this.x)
	},
}
export const hunhe2 = {
	data() {
		return {
			msg:'nh',
			x:100,
			y:200
		}
	},
}
