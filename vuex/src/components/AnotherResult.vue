<template>
    <div>
	    <!-- <p>Counter is: {{ counter }}</p> -->
	    <!-- <p>Number of Clicks: {{ clicks }}</p> -->
	    <p>Counter is: {{ doubleCounter }}</p>
	    <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex'
    export default {
    	computed: {
    		...mapGetters([
	    		'doubleCounter',
	    		'stringCounter'
			]),
    		ourOwnMixedComputedProp: () => {
    			// etc.
    		}
		}

        // props: ['counter']

        // computed: {
        // 	counter () {
        // 		return this.$store.getters.doubleCounter
        // 	},
        // 	clicks () {
        // 		return this.$store.getters.stringCounter
        // 	}
        // }

    }
</script>