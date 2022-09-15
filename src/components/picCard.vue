<template>  
        <ul class="cards row row-cols-3 g-3 justify-content-center">
            <div class="col" v-for="(card, i) in cards" :key="i">
                <li class="card_item custom-radius" :style="{ backgroundImage: `url(${card.bgPic})`}">
                </li>
                <div class="card_des">
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
        margin-top: -100px !important;
        position: absolute;
        width: 100%;
        .col{

            padding: 0 20px;
            .card_item{
                background: #fff;
                height: 400px;
                aspect-ratio: 1;
                background-position: center;
                background-size: cover;
                position: relative;
                overflow: hidden;
                transition: 500ms ease-in-out;
                cursor: pointer;
                box-shadow: 0px 6px 20px 0px rgb(0 0 0 / 40%);

                &::after{
                    content: '';
                    display: block;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(0deg, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0) 100%)
                }

                &:hover{
                    transform: scale(1.04);
                    box-shadow: 0px 10px 20px 10px rgb(0 0 0 / 40%);

                    .card_des{
                        transform: scale(0.96);
                    }
                }

            }
            .card_des{
                padding-left: 32px;
                transform: translateY(-80px);
                z-index: 999;
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
        }
    }
</style>