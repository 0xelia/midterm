<template>
    <section class="mail_section">
        <TitleComp :content="content"/>
    </section>
</template>

<script>
import TitleComp from "./titleComp.vue";
    export default {
    name: "mailSection",
    components: { TitleComp },

    data(){
        return{
            content: {
                title: 'Insider offers & flash sales in your inbox every week',
                subtitle: 'Join our mailing list today',
                p: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est aut autem illo rem aperiam repudiandae laborum hic nihil.',
                pic: require('../assets/images/banner1-2x.jpg'),
                video: false,
                mail: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .mail_section{

    }
</style>