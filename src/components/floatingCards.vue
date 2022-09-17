<template>
    <div class="col">
        
        <li class="card_item custom-radius" :style="`backgroundImage: url(${content.bgPic})`" ></li>

        <div class="card_des">

            <h5>
                {{content.title}}
            </h5>
            <p>
                {{content.subtitle}}
            </p>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'floatingCards',
        props: {
            content: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    .card_item{
        flex-basis: 0;
        flex-grow: 1;
        aspect-ratio: 1;
        margin-top: -100px !important;
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
        transition: all 300ms ease-in-out;
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.4);

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 15px 35px 0px rgba(0,0,0,0.6);
        }

        &::after{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0)100%);
        }

    }
    .card_des{
        padding-left: 2rem;
        position: absolute;
        transform: translateY(-6rem);
        pointer-events: none;

        h5{
            font-size: 26px;
            color: $text-white;
            margin-bottom: 0 !important;
        }

        p{
            font-size: 22px;
            color: $bg-alert
        }
    }
</style>