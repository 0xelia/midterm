<template>
    <div>
        <JumboComp/>
        <CardsSection/>
        <VideoSection/>
        <MailSection/>
    </div>
</template>

<script>
import JumboComp from './jumboComp.vue';
import CardsSection from './cardsSection.vue';
import VideoSection from './videoSection.vue';
import MailSection from './mailSection.vue';
    export default {
    name: "mainComp",
    components: { JumboComp, CardsSection, VideoSection, MailSection }
}
</script>

<style lang="scss" scoped>

</style>