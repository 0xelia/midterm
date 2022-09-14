<template>  
        <ul class="cards row row-cols-3 g-3 justify-content-center">
            <li class="card_item" v-for="(card, i) in cards" :key="i">
                {{card.title}}
            </li>
        </ul>
</template>

<script>
    export default {
        name:'picCard',
        props:{
            cards: Array
        }
    }
</script>

<style lang="scss" scoped>

</style>