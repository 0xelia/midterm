<template>
    <section class="display_section">
        <div class="quote_section d-flex flex-column align-items-center">
            <h3 class="quote">
                “I’ve failed over and over again in my life. And that is why I succeed.”
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat hic porro pariatur vero, ex maxime voluptate?
            </p>
            <button class="button bg-blue btn-padding-small d-flex align-items-center">
                Buy avada today
                <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'displaySection',

    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    .display_section{
        background-image: url('../assets/images/banner2-2x.jpg');
        background-size: cover;
        background-position: center;
        padding: 120px 100px;
        color: $text-white;
        min-height: 600px;
        position: relative;

        &::after{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)
        }

        .quote_section{
            padding: 0 50px;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            .quote{
                font-size: 42px;
                margin-bottom: 3rem;
            }
            p{
                margin-bottom: 1.5rem !important;
            }

            .icon{
                height: 12px;
                padding-left: 8px;
            }
        }
    }
</style>