<template>
    <div>
        <PodcastComp :content="articleCards" :text="headings"/>
    </div>
</template>

<script>
import PodcastComp from './podcastComp.vue';
    export default {
    name: "articlesSection",
    components: { PodcastComp },

    data(){
        return {
            headings:{
                title: 'Latest articles',
                cta: 'Read all articles'
            },

            articleCards: [
                {   
                    bgPic: require('../assets/images/blog4-2x.jpg'),
                    title: 'The best protein shake',
                    subtitle: 'By admin | November 26th, 2019 | Gym',
                    video: false 
                },
                {

                    bgPic: require('../assets/images/blog1-2x.jpg'),
                    title: 'Ultimate cardio workout',
                    subtitle: 'By admin|November 26th, 2019|Gym',
                    video: false 
                },
                {
                    bgPic: require('../assets/images/blog3-2x-200x129.jpg'),
                    title: 'New juices available now',
                    subtitle: 'By admin|November 26th, 2019|Gym',
                    video: false
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>