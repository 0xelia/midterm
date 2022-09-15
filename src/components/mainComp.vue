<template>
    <div>
        <JumboComp/>
        <CardsSection/>
        <VideoSection/>
    </div>
</template>

<script>
import JumboComp from './jumboComp.vue';
import CardsSection from './cardsSection.vue';
import VideoSection from './videoSection.vue';
    export default {
    name: "mainComp",
    components: { JumboComp, CardsSection, VideoSection }
}
</script>

<style lang="scss" scoped>

</style>