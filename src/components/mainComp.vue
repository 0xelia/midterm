<template>
    <div>
        <JumboComp/>
        <CardsSection/>
        <VideoSection/>
        <MailSection/>
        <PlansSection/>
    </div>
</template>

<script>
import JumboComp from './jumboComp.vue';
import CardsSection from './cardsSection.vue';
import VideoSection from './videoSection.vue';
import MailSection from './mailSection.vue';
import PlansSection from './plansSection.vue';
    export default {
    name: "mainComp",
    components: { JumboComp, CardsSection, VideoSection, MailSection, PlansSection }
}
</script>

<style lang="scss" scoped>

</style>