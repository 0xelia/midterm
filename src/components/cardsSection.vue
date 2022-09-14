<template>
    <section>
        <div class="container">
            
            <PicCard :cards="cards"/>
        </div>
    </section>
</template>

<script>
import PicCard from './picCard.vue';

    export default {
    name: "cardsSection",
    components: { PicCard },
    data() {
        return {
            cards: [
                {
                    title: 'Crossfit Workout',
                    subtitle: 'Push Your limits',
                },
                {
                    title: 'Crossfit Workout',
                    subtitle: 'Push Your limits',
                    
                },
                {
                    title: 'Crossfit Workout',
                    subtitle: 'Push Your limits',

                },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';

    section{
        height: 700px;
        background-color: red;
        background: linear-gradient(142deg, $gradient-blue 31%, $gradient-red 100%);
    }
</style>