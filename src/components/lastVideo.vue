<template>
    <section>
        <div class="container">
            <div class="text_wrapper text-center">

                    <font-awesome-icon class="icon" icon="fa-solid fa-play"/>
                <h2>
                    Crossfit Workout of the day
                </h2>
                <h5>
                    November 15th, 2019 
                </h5>
                <p class="cta d-flex align-items-center justify-content-center">
                    View all videos
                    <font-awesome-icon class="chevron ms-1" icon="fa-solid fa-chevron-right"/>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'lastVideo'
    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    section{
        background-image: url('../assets/images/banner14-2x.jpg');
        padding: 120px 0;
        background-position: center;
        background-size: cover;
        position: relative;

        .text_wrapper{
            color: $text-white;

            .icon{
                color: $text-blue;
                background-color: whitesmoke;
                padding: 40px;
                border-radius: 50%;
                margin-bottom: 2rem;

                &:hover{
                    color: $text-red
                }

            }
            h2{
                font-size: 46px;
                font-weight: 500;
                margin-bottom: 2rem !important;
            }
            h5{
                font-size: 38px;
                font-weight: 500;
                color: $bg-alert;
            }
            .cta{
                font-size: 20px;

                .chevron{
                    height: 14px;
                }

                &:hover{
                    color: $text-blue
                }
            }
        }

    }
</style>