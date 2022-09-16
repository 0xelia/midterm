<template>
    <div>
        <JumboComp/>
        <CardsSection/>
        <VideoSection/>
        <MailSection/>
        <PlansSection/>
        <ArticlesSection/>
        <DisplaySection/>
        <PartnersSection/>
    </div>
</template>

<script>
import JumboComp from './jumboComp.vue';
import CardsSection from './cardsSection.vue';
import VideoSection from './videoSection.vue';
import MailSection from './mailSection.vue';
import PlansSection from './plansSection.vue';
import ArticlesSection from './articlesSection.vue';
import DisplaySection from './displaySection.vue';
import PartnersSection from './partnersSection.vue';
    export default {
    name: "mainComp",
    components: { JumboComp, CardsSection, VideoSection, MailSection, PlansSection, ArticlesSection, DisplaySection, PartnersSection }
}
</script>

<style lang="scss" scoped>

</style>