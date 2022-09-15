<template>
    <TitleComp :content="content"/>
</template>

<script>
import TitleComp from './titleComp.vue';
    export default {
    name: "jumboComp",
    data() {
        return {
            content: {
                subtitle: "Certified fitness professional",
                title: "Take control of your health",
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos animi.",
                pic: require('../assets/images/slider82x-scaled.jpg'),
                video: true,
                mail: false
            }
        };
    },
    components: { TitleComp }
}

</script>

<style lang="scss" scoped>
@import '../style/generals.scss';

.jumbo{
    background-image: url('../assets/images/slider82x-scaled.jpg');
    background-position: top;
    background-size: cover;
    min-height: 600px;
    position: relative;

    .content{
        margin-top: 100px;
        margin-bottom: 120px;
        gap: 30px;

        h4{
            color: $text-red;
        }
        h2{
            color: $text-white;
            font-size: 4rem;
        }
        p{
            color: $text-white-opacity;
            font-size: 20px;
        }

        button{
            margin-right: 20px;
        }
        
        .cta{
            background-color: transparent;
            border: solid rgba(255, 255, 255, 0.5) 2px !important;

            &:hover{
                color: black !important;
                background-color: $text-white !important; 
            }
        }
    }

    .icon{
        padding: 40px;
        background-color: $text-white;
        border-radius: 50%;
        color: $text-blue;

        &:hover {
            color: $text-red
        }
    }
}
</style>