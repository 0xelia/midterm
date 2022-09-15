<template>  
        <ul class="cards row row-cols-3 g-3 justify-content-center">
            <div :class="['col', !card.regular ? 'card_center' : '']" v-for="(card, i) in cards" :key="i">
                <li :class="['card_item  custom-radius', card.regular ? 'regular floating' : 'horizontal']">
                    <img :src="`${card.bgPic}`" alt="">
                    <font-awesome-icon v-if="!card.regular" icon="fa-solid fa-play" class="icon_play"/>
                </li>
                <div :class="['card_des', card.regular ? 'card_des_1' : 'card_des_2']">
                    <h4>
                        {{card.title}}
                    </h4>
                    <h6>
                        {{card.subtitle}}
                    </h6>
                </div>
            </div>
        </ul>
</template>

<script>
    export default {
        name:'picCard',
        props:{
            cards: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';

    .cards{
        .col{
            &.card_center{
                display: flex;
                justify-content: center;
                flex-direction: column;

                &.card_center:nth-child(2){
                    padding: 0 20px !important;
                }
            }
            .card_item{
                background: #fff;
                background-position: center;
                background-size: cover;
                position: relative;
                overflow: hidden;
                transition: 500ms ease-in-out;
                cursor: pointer;

                &.floating{
                        margin-top: -100px !important;
                    }

                &.regular{
                    aspect-ratio: 1;
                    box-shadow: 0px 6px 20px 0px rgb(0 0 0 / 40%);

                    &:hover{
                    transform: scale(1.04);
                    box-shadow: 0px 10px 20px 10px rgb(0 0 0 / 40%);

                    .card_des{
                        transform: scale(0.96);
                    }
                }

                }

                &.horizontal {
                    height: 200px;
                    aspect-ratio: 16/9;


                    .icon_play{
                        padding: 30px !important;
                    }
                }

                img{
                    width: 100%;
                }


            }
            .card_des_1{

                
                padding-left: 32px;
                transform: translateY(-80px);
                
                transition: 500ms ease-in-out;
                

                h4{
                    font-size: 24px;
                    color: whitesmoke;
                    font-weight: 700;
                }
                h6{
                    font-size: 20px;
                    color: $bg-alert;
                }
            }

            .card_des_2{
                text-align: center;
                padding-top: 20px;

                h4{
                    font-size: 24px;
                    color: rgb(19, 18, 18);
                }
                h6{
                    font-size: 20px;
                    color: $text-blue;
                }
            }
        }
    }
</style>