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
        <LastVideo/>
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
import LastVideo from './lastVideo.vue';
    export default {
    name: "mainComp",
    components: { 
        JumboComp, 
        CardsSection, 
        VideoSection, 
        MailSection, 
        PlansSection, 
        ArticlesSection, 
        DisplaySection, 
        PartnersSection, 
        LastVideo
    }
}
</script>

<style lang="scss" scoped>

</style>