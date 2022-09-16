<template>  
        <ul class="cards">
            <div  v-for="(card, i) in cards" :key="i">
                <li :class="['card_item horizontal', card.video ?  'custom-radius' : '']">
                    <img :src="`${card.bgPic}`" alt="">
                    <font-awesome-icon v-if="card.video" icon="fa-solid fa-play" class="icon_play"/>
                    <span v-if="!card.video" class="hover_gradient" ></span>
                </li>
                <div :class="['card_des', card.video ?  'card_des_1' : 'card_des_2']">
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
    @import '../style/mixins.scss';
    .cards{
        @include flex-cards;
            .card_item{
                height: 100%;
                flex-basis: calc((100% / 3) - 2rem);
                background: #fff;
                background-position: center;
                background-size: cover;
                position: relative;
                overflow: hidden;
                transition: 500ms ease-in-out;
                cursor: pointer;

                

                &.horizontal {
                    height: 200px;
                    aspect-ratio: 16/9;

                    .hover_gradient{
                        position: absolute;
                        opacity: 0;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(0deg, rgba(65,84,255,0.7) 20%, rgba(219,219,219,0) 100%);
                        z-index: 999;
                        transition: 300ms ease-in-out;

                        &:hover{
                            opacity: 1;
                        }
                    }


                    .icon_play{
                        padding: 30px !important;
                    }
                }

                img{
                    width: 100%;
                }


            }
            .card_des_2{
                text-align: left;
                padding: 1rem 0 0 1rem;
                

                h4{
                    font-size: 20px;
                    
                }
                h6{
                    font-size: 16px;
                    font-weight: 200;
                }
            }

            .card_des_1{
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
</style>