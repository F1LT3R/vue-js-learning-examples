<template>
	<div>
		<button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 500})">Increment</button>
		<button class="btn btn-primary" @click="asyncDecrement({by: 100, duration: 500})">Decrement</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		methods: {
			// ...mapMutations([
			// 	'increment',
			// 	'decrement'
			// ]),
			// myOwnCustomMutation () {
			// 	// etc.
			// }
			...mapActions([
				'asyncIncrement',
				'asyncDecrement'
			]),
			// Map-actions will create the following method automatically
			// Argmnets are passed on automatically
			// increment (by) {
			// 	this.$store.dispatch('increment', by)
			// }
		}

        // methods: {
        //     increment() {
        //         // this.$emit('updated', 1);
        //         // this.$store.state.counter += 1
        //         this.$store.commit('increment')
        //     },
        //     decrement() {
        //         // this.$emit('updated', -1);
        //         // this.$store.state.counter -= 1
        //         this.$store.commit('decrement')
        //     }
        // }
	}
</script>