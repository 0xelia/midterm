<template>
    <div>
        <JumboComp/>
        <CardsSection/>
    </div>
</template>

<script>
import JumboComp from './jumboComp.vue';
import CardsSection from './cardsSection.vue';
    export default {
    name: "mainComp",
    components: { JumboComp, CardsSection }
}
</script>

<style lang="scss" scoped>

</style>