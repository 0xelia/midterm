<template>
        <li :class="['card_item text-center d-flex flex-column', content.bg_black ? 'text_white border_blue' : '']">
            <font-awesome-icon v-if="content.icon !== ''" :icon="content.icon" class="icon"/>
            <img v-if="!content.bg_black" class="sponsor" :src="content.pic" alt="">
            <div v-if="content.title != '' && content.subtitle != ''" class="card_head">
                <h3 class="title">
                    {{content.title}}
                </h3>
                <h5>
                    {{content.subtitle}}
                </h5>
            </div>
            <p>
                {{content.p}}
            </p>
            <div class="cta d-flex align-items-center">
                {{content.cta}}
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="chevron ms-1"/>
            </div>
        </li> 
</template>

<script>
    export default {
        name:'graphicCard',
        props:{
            content: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    .card_item{

        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: calc((100% / 3) - 2rem);
        padding: 2.75rem 2rem !important;
        
        &.border_blue{
            
            border: solid $text-blue 2px;
            border-radius: 5px;
        }

        &.text_white{
            color: $text-white;
        }

        .icon{
            height: 2.5rem;
            aspect-ratio: 1;
            margin-bottom: 1rem;
        }

        .sponsor{
            margin-bottom: 2.5rem;
        }

        .card_head{
            margin-bottom: 1.5rem;
            h3{
                font-size: 24px;
            }
            h5{
                font-size: 18px;
                color: $bg-alert
            }
        }

        p{
            font-weight: 200;
            margin-bottom: 1.5rem !important;
            line-height: 30px;
        }

        .cta{
            cursor: pointer;

            &:hover{
                color: $bg-alert
            }

            .chevron{
                height: 13px;
            }
        }
    }
</style>