<template>
<div class="jumbo" :style="`backgroundImage: url(${content.pic})`">
        <div class="container">
    
            <div class="row">
                <div class="col-10 d-flex flex-column justify-content-space-between content">
                    <h4>
                        {{content.subtitle}}
                    </h4>
                    <h2>
                        {{content.title}}
                    </h2>

                    <div v-if="content.mail" class="inputs">
                        <input type="email" name="" id="" placeholder="Insert your email" class="mail_input">
                        <input type="button" value="Subscribe" class="button bg-blue btn-padding-small">
                    </div>

                    <p>
                        {{content.p}}
                    </p>
                    <div v-if="content.video" class="button_wrapper" >
                        <button class="button bg-blue youtube_btn btn-padding-big">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                            Visiti my YouTube channel
                        </button >
                        <button class="button  btn-padding-big cta">
                            Buy Avada today
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </button>
                    </div>
                </div>
                <div v-if="content.video" class="col-2 d-flex justify-content-center align-items-center">
                    <font-awesome-icon class="icon" icon="fa-solid fa-play" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'titleComp',

        props: {
            content: Object
        }
    }
</script>

<style lang="scss" scoped>
@import '../style/generals.scss';

.jumbo{
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

        .inputs{
            width: 70%;

            .mail_input{
                padding: 10px 23px;
                border-radius: 999px;
                margin-right: 1rem;
                width: 60%;
            }

            .button{
                width: 30% !important;
            }
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