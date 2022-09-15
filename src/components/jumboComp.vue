<template>
    <div class="jumbo">
        <div class="container">
    
            <div class="row">
                <div class="col-10 d-flex flex-column justify-content-space-between content">
                    <h4>
                        Certified fitness professional
                    </h4>
                    <h2>
                        Take control of your health
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dignissimos animi.
                    </p>
                    <div class="button_wrapper" >
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
                <div class="col-2 d-flex justify-content-center align-items-center">
                    <font-awesome-icon class="icon" icon="fa-solid fa-play" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jumboComp'
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