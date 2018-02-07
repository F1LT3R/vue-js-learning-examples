<template>
    <div>
		<button class="btn btn-primary" @click="increment({by: 100, duration: 500})">Increment</button>
		<button class="btn btn-primary" @click="decrement({by: 100, duration: 500})">Decrement</button>
    </div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		methods: {
			...mapActions([
				'increment',
				'decrement'
			])
		}
	}

    // export default {
    //     methods: {
    //         increment() {
    //             // this.$emit('updated', 1);
    //             // this.$store.state.counter += 1
    //             this.$store.commit('increment')
    //         },
    //         decrement() {
    //             // this.$emit('updated', -1);
    //             // this.$store.state.counter -= 1
    //             this.$store.commit('decrement')
    //         }
    //     }
    // }
</script>