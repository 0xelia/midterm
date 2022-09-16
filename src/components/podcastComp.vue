<template>
    <section class="playlist">
            <div class="container">
                <div class="text d-flex align-items-center justify-content-between">
                    <h4>{{text.title}}</h4>
                    <p class="d-flex align-items-center">
                        {{text.cta}}
                        <font-awesome-icon class="icon ps-1" icon="fa-solid fa-chevron-right"/>
                    </p>
                </div>
                <PicCard :cards="content"/>
            </div>

        </section>
</template>

<script>
import PicCard from './picCard.vue';
    export default {
    name: "podcastComp",
    components: { PicCard },
    props: {
        text: Object,
        content: Array
    },

}
</script>

<style lang="scss" scoped>
        @import '../style/generals.scss';

.playlist{
    padding: 50px 0;

    p{
        padding-right: 80px;
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