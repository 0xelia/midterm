<template>
    <section class="row row-cols-2">
        <figure class="main_video">
            <img src="../assets/images/service15-2x.jpg" alt="">
            <font-awesome-icon class="icon" icon="fa-solid fa-play" />
        </figure>
        <div class="channel_description d-flex flex-column">
            <h5>
                Tune up your workouts
            </h5>
            <h3>
                The best health & fitness advice online
            </h3>

            <div class="widget d-flex">
                <figure>
                    <img src="../assets/images/unnamed.jpg" alt="">
                </figure>
                <div class="youtube_widget">
                    <span>Channel Name</span>
                    <div class="youtube_box d-flex">
                        <div class="box_title d-flex align-items-center">
                            <font-awesome-icon icon="fa-brands fa-youtube" class="pe-1"/>
                            Youtube
                        </div>
                        <div class="subs">
                            999+
                        </div>
                    </div>
                </div>
            </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas cum earum quo ratione hic ut eaque magnam deserunt. Quod!
            </p>
            <button class="button bg-red btn-padding-small d-flex align-items-center">
                <font-awesome-icon icon="fa-brands fa-youtube" class="pe-1"/>
                Visit my Youtube Channel
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'mainVideoComp'
    }
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    section{
        min-height: 700px;
        background-color: $bg-app-white;

        .main_video{
            margin-top: -50px;
            overflow: hidden;
            position: relative;

            img{
                width: 100%;
                border-radius: 0 5px 50px 0;
            }

            .icon{
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 40px;
                background-color: $text-white;
                border-radius: 50%;
                color: $text-blue;
                transition: 200ms ease-in-out;
                cursor: pointer;

                &:hover {
                    color: $text-red
                }
            }
        }

        .channel_description{
            padding: 4.2rem 10rem 0 4.2rem;
            gap: 2rem;

            h5{
                color: $text-blue;
                font-size: 24px;
            }

            h3{
                font-size: 42px;
            }

            .widget{
                gap: 10px;
                span{
                    font-size: 10px;
                }

                .youtube_box{
                    .box_title{
                        background-color: $bg-red;
                        color: whitesmoke;
                        font-size: 14px;
                        padding: 2px 2px;
                        border-radius: 2px;
                    }

                    .subs{
                        font-size: 12px;
                        padding: 2px 3px;
                        color: gray;
                        border: solid gray 1px;
                        border-left: 0px;
                    }
                }

            }
        }
    }
</style>