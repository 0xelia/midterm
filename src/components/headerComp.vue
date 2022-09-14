<template>
    <header class="d-flex align-items-center">
        <div class="container">
            
            <div class= "wrapper row row-cols-4 align-items-center justify-content-center">
                <figure class="logo me-auto">
                    <img src="../assets/images/logo.png" alt="">
                </figure>
                <NavItem :menu="mainNav"/>


                <button class="button bg-blue btn-padding-small">
                    Schedule a Workout
                </button>

                <!-- uso lo stesso componente solo perchè non è presente logica al suo interno -->
                <NavItem class="margin" :menu="iconNav"/> 
            </div>

        </div>
    </header>
</template>

<script>

import NavItem from "./navItem.vue";

    export default {
    name: "headerComp",
    components: {
    NavItem
},

    mounted(){
        console.log(this.mainNav)
    },
    data(){
        return{
            mainNav: [
                {
                    text: 'Home',
                    alert: false,
                    active: true,
                    icon: ''
                    
                },
                {
                    text: 'Servivces',
                    alert: false,
                    active: false,
                    icon: "fa-solid fa-chevron-down"
                    
                },
                {
                    text: 'About',
                    alert: false,
                    active: false,
                    icon: "fa-solid fa-chevron-down"
                    
                },
                {
                    text: 'Videos',
                    alert: false,
                    active: false,
                    icon: "fa-solid fa-chevron-down"
                    
                },
                {
                    text: 'Blog',
                    alert: false,
                    active: false,
                    icon: ''
                    
                },
                {
                    text: 'Store',
                    alert: true,
                    active: false,
                    icon: "fa-solid fa-chevron-down"
                },
            ],

            iconNav: [
                {
                    text: '',
                    alert: false,
                    active: false,
                    icon: 'fa-solid fa-cart-shopping'
                    
                },
                {
                    text: '',
                    alert: false,
                    active: false,
                    icon: 'fa-solid fa-magnifying-glass'
                    
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

    header{
        @import '../style/generals.scss';
        background-color: $bg-app-black;
        padding: 25px 0;
        .wrapper {
            height: 100%;

            button{
                margin: 0 30px;
            }
        }
    }
</style>