<template>
    <div>
        <MainVideoComp/>
        <section class="playlist">
            <div class="container">
                <div class="text d-flex align-items-center justify-content-between">
                    <h4>Featured Playlist</h4>
                    <p class="d-flex align-items-center">
                        View all videos
                        <font-awesome-icon class="icon ps-1" icon="fa-solid fa-chevron-right"/>
                    </p>
                </div>
                <PicCard :cards="cards"/>
            </div>

        </section>
    </div>
</template>

<script>
import MainVideoComp from './mainVideoComp.vue';
import PicCard from './picCard.vue';
    export default {
    name: "videoSection",
    components: { MainVideoComp, PicCard },

    data(){
        return{
            cards: [
                {   
                    regular: false,
                    bgPic: require('../assets/images/video2-2x.jpg'),
                    title: 'Thighs & glute workout',
                    subtitle: 'Increase your mobility'
                },
                {
                    regular: false,
                    bgPic: require('../assets/images/video7-2x.jpg'),
                    title: 'Lift, firm & perk up',
                    subtitle: 'Feel young againg'
                },
                {
                    regular: false,
                    bgPic: require('../assets/images/video9-2x.jpg'),
                    title: 'Slim & trim your waist',
                    subtitle: 'Shed those extra poundes'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';

    .playlist{
        padding: 50px 0;

        p{
            padding-right: 120px;
            cursor: pointer;

            .icon{
                height: 10px;
            }

            &:hover {
                color: $text-blue
            }
        }
    }
</style>