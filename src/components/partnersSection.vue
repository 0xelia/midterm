<template>
    <section>
        <div class="container">
            <ul class="sponsors">
                <GraphicCard v-for="(card, i) in cardContent" :key="i" :content="card" />
            </ul>
        </div>
    </section>
</template>

<script>
import GraphicCard from './graphicCard.vue';
    export default {
    name: "partnersSection",
    components: { GraphicCard },

    data(){
        return{
            cardContent:[
                {
                    icon:'',
                    pic: require('../assets/images/sponsor-1-2x-200x103.png'),
                    title: '',
                    subtitle: '',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt',
                    cta: 'Visit Yoga Studio',
                    bg_black: false
                },
                {
                    icon:'',
                    pic: require('../assets/images/sponsor-2-2x-200x103.png'),
                    title: '',
                    subtitle: '',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt',
                    cta: 'Join Fitness Center',
                    bg_black: false
                },
                {
                    icon:'',
                    pic: require('../assets/images/sponsor-3-2x-200x103.png'),
                    title: '',
                    subtitle: '',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt',
                    cta: 'Learn about FC',
                    bg_black: false
                },
                {
                    icon:'',
                    pic: require('../assets/images/sponsor-4-2x-200x103.png'),
                    title: '',
                    subtitle: '',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt',
                    cta: 'Visit Power gym',
                    bg_black: false
                },
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/mixins.scss';
    section{
        padding: 50px 0;

        .sponsors{
            @include flex-cards;
        }
    }
</style>