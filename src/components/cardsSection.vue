<template>
    <section>
        <div class="container">

            <ul class="cards">
                <FloatingCards v-for="(card, i) in cards" :key="i" :content="card"/>
            </ul>

            <div class="quote text-center">
                <p>
                    "How you respond to the challenge to the second half will determinatewhat you become after the game, whatever you are a winner or a loser"
                </p>
                <address class="d-flex justify-content-center align-items-center">
                    <img class="pic" src="../assets/images/avatar-1-2x.jpg" alt="">
                    <p class="name">Brad Johnson</p>
                    <p class="city">Las Vegas</p>
                </address>
            </div>
        </div>
    </section>
</template> 

<script>
import FloatingCards from './floatingCards.vue';


    export default {
    name: "cardsSection",
    data() {
        return {
            cards: [
                {
                    title: "Crossfit Workout",
                    subtitle: "Push Your limits",
                    bgPic: require("../assets/images/service6-2x.jpg"),
                    regular: true
                },
                {
                    title: "Crossfit Workout",
                    subtitle: "Look good, feel good",
                    bgPic: require("../assets/images/box1-2x.jpg"),
                    regular: true
                },
                {
                    title: "Crossfit Workout",
                    subtitle: "Find a partner",
                    bgPic: require("../assets/images/box3-2x.jpg"),
                    regular: true
                },
            ]
        };
    },
    components: { FloatingCards }
}
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    @import '../style/mixins.scss' ;

    section{
        min-height: 700px;
        padding-bottom: 3rem;   
        background: linear-gradient(142deg, $gradient-blue 31%, $gradient-red 100%);
        
        .container{
            position: relative;

            .cards{
                @include flex-cards;
                gap: 2rem !important;
            }

            .quote{
                padding-top: 100px;
                color: $text-white;
                font-size: 36px;

                p{
                    max-width: 800px;
                    margin: 0 auto;
                    word-spacing: 5px;
                    line-height: 45px;
                }

                address{

                    margin: 100px auto;
                    color: $text-white;
                    max-width: 400px;
                    gap: 0.8rem;

                    img{
                        height: 70px;
                        aspect-ratio: 1;
                        object-fit: cover;
                        object-position: center;
                        border-radius: 50%;
                    }
                    
                    p{
                        font-size: 20px;
                        margin: 0;
                    }

                    .city{
                        opacity: 0.5;
                    }
                }
            }
        }
    }
</style>