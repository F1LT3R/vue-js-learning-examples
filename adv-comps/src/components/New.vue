<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            } 
        },
        activated () {
            console.log('Activated!')
        },
        deactivated () {
            console.log('De-activated!')
        },
        destroyed () {
            console.log('Destroyed!')
        }
    }
</script>

<style>
    
</style>