<template>
    <div>
        <MainVideoComp/>
        <PodcastComp :content="videoCards" :text="headings"/>
    </div>
</template>

<script>
import MainVideoComp from './mainVideoComp.vue';
import PodcastComp from './podcastComp.vue';
    export default {
    name: "videoSection",
    components: { MainVideoComp, PodcastComp },
    
    data(){
        return {
            headings:{
                title: 'Featured Playlist',
                cta: 'View all videos'
            },

            videoCards: [
                {   
                    bgPic: require('../assets/images/video2-2x.jpg'),
                    title: 'Thighs & glute workout',
                    subtitle: 'Increase your mobility',
                    video: true 
                },
                {

                    bgPic: require('../assets/images/video7-2x.jpg'),
                    title: 'Lift, firm & perk up',
                    subtitle: 'Feel young againg',
                    video: true 
                },
                {
                    bgPic: require('../assets/images/video9-2x.jpg'),
                    title: 'Slim & trim your waist',
                    subtitle: 'Shed those extra poundes',
                    video: true
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>