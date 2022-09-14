<template>
        <ul class=" d-flex align-items-center">
            <li v-for="(link, i) in menu" :key="i" :class="[link.active ? 'active' :'', 'd-flex align-items-center' ]" >
                <a href="#">{{link.text}}</a>
                <font-awesome-icon v-if="link.icon != ''" class="icon" :icon="link.icon" />
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

            .alert_widget{
                background-color: $bg-alert;
                color: black;
                padding: 3px 5px;
                margin-left: 8px;
                font-size: 12px;
                border-radius: 3px;
            }

            .icon{
                margin-left: 3px;
                height: 12px;
            }
        }
    }
</style>