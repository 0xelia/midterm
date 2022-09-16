<template>
    <div class="plans">
        <div class="container">

            <ul class="card_list">
                <GraphicCard v-for="(card, i) in cards" :key="i" :content="card"/>
            </ul>
        </div>
    </div>
</template>

<script>
import GraphicCard from './graphicCard.vue';
    export default {
    name: "plansSection",
    components: { GraphicCard },

    data(){
        return{
            cards: [
                {
                    icon:'fa-regular fa-clock',
                    pic: '',
                    title: 'Team training',
                    subtitle: 'Find a partner',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt eaque pariatur facere harum itaque, unde magnam! Voluptatibus nulla eum numquam!',
                    cta: 'Find a partner',
                    bg_black: true
                },
                {
                    icon:'fa-solid fa-dumbbell',
                    pic: '',
                    title: 'Crossfit workout',
                    subtitle: 'Push your limits',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt eaque pariatur facere harum itaque, unde magnam! Voluptatibus nulla eum numquam!',
                    cta: 'Learn about Crossfit',
                    bg_black: true
                },
                {
                    icon:'fa-solid fa-child',
                    pic: '',
                    title: 'Weight loss plan',
                    subtitle: 'Shed those pounds',
                    p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi, assumenda nam perferendis nesciunt eaque pariatur facere harum itaque, unde magnam! Voluptatibus nulla eum numquam!',
                    cta: 'Schedule a workout',
                    bg_black: true
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .plans{
        background-color: black;
        .card_list{
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            padding: 4rem 0 !important;
        }
    }
</style>