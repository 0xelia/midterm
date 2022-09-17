<template>
        <ul class=" d-flex align-items-center">
            <li v-for="(link, i) in menu" :key="i" :class="[link.active ? 'active' :'', 'd-flex align-items-center', link.footer ? 'color_white': '' ]" >

                <a :class="['link', link.icon_before? 'link_after' : '']" href="#">{{link.text}}</a>
                <font-awesome-icon v-if="link.icon != ''" :class="['icon', link.social ? 'social' : '', link.icon_before? 'icon_before' : '']" :icon="link.icon" />
                <span v-if="link.alert" class="alert_widget">
                    new
                </span>

            </li> 
        </ul>
</template>

<script>
    export default {
        name:'navBar',
        props: {
            menu: Array
        }
    }
</script>

<style lang="scss" scoped>
@import '../style/generals.scss';

    ul{
        gap: 28px;
        width: fit-content;
        li{
            color: $text-white-opacity;

            &.active, &:hover{
                color: $text-white
            }

            .link_after{
                order: 2;
            }


            .alert_widget{
                background-color: $bg-alert;
                color: black;
                padding: 3px 5px;
                margin-left: 8px;
                font-size: 12px;
                border-radius: 3px;
            }


            .icon{
                margin: 0 5px;
                height: 12px;
                order: 1;
                cursor: pointer;

                &.social{
                    height: 20px;
                    color: $text-red;
                }

                &.icon_before{
                    order: 1;
                }
            }
        }
    }
</style>