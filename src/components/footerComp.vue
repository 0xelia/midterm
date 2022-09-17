<template>
    <footer>
        <div class="container">
            <div class=" wrapper row row-cols-3">

                <div class="col logo_wrapper">
                    <figure class="logo">
                        <img src="../assets/images/logo-200x34.png" alt="">
                    </figure>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat commodi accusamus, amet debitis nostrum provident nobis!
                    </p>
                    <NavItem :menu="socials"/>
                </div>

                <div class="recent_post text-center col">
                    <h4>
                        Recent Post
                    </h4>
                    <NavItem class="flex-column posts" :menu="posts" />
                </div>
                <div class="col address">
                    <h4>
                        Contact Information 
                    </h4>
                    <address class="text-center">
                        <p class="street">
                            0000 Random Road Michigan, 0000
                        </p>

                        <p class="mb-2">
                            Mobile: 123 555 000
                        </p>

                        <p>
                            Mail: info@avadafitness.com
                        </p>
                    </address>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import NavItem from './navItem.vue';
    export default {
    name: "footerComp",
    data() {
        return {
            socials: [
                {
                    text: "",
                    alert: false,
                    active: false,
                    icon: "fa-brands fa-facebook",
                    social: true
                },
                {
                    text: "",
                    alert: false,
                    active: false,
                    icon: "fa-brands fa-twitter",
                    social: true
                },
                {
                    text: "",
                    alert: false,
                    active: false,
                    icon: "fa-brands fa-instagram",
                    social: true
                },
                {
                    text: "",
                    alert: false,
                    active: false,
                    icon: "fa-brands fa-youtube",
                    social: true
                },
                {
                    text: "",
                    alert: false,
                    active: false,
                    icon: "fa-brands fa-linkedin",
                    social: true
                },
            ],

            posts: [
                {
                    text: 'The best protein shake',
                    icon: 'fa-solid fa-chevron-right',
                    icon_before: true,
                    footer: true
                },
                {
                    text: 'The best protein shake',
                    icon: 'fa-solid fa-chevron-right',
                    icon_before: true,
                    footer: true
                },
                {
                    text: 'The best protein shake',
                    icon: 'fa-solid fa-chevron-right',
                    icon_before: true,
                    footer: true
                },
                {
                    text: 'The best protein shake',
                    icon: 'fa-solid fa-chevron-right',
                    icon_before: true,
                    footer: true
                },
                {
                    text: 'The best protein shake',
                    icon: 'fa-solid fa-chevron-right',
                    icon_before: true,
                    footer: true
                },
            ]
        };
    },
    components: { NavItem }
}
</script>

<style lang="scss" scoped>
    @import '../style/generals.scss';
    footer{
        padding-top: 100px;
        background-color: black;

        .wrapper{
            color: $text-white;
            gap: 2rem;
            
            h4{
                font-size: 22px;
                margin-bottom: 2rem !important;
            }

            .col{
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 400px;
                flex-basis: 0;
                flex-grow: 1;

                &.logo_wrapper{
                    .logo{
                        margin-bottom: 1rem !important;
                    }

                    p{
                        color: $text-white;
                        font-size: 20px;
                        margin-bottom: 2rem !important;
                    }
                }

                &.address{

                    .street{
                        opacity: 0.5;
                        margin-bottom: 1rem !important;
                    }
                }
            }

        }

    }
</style>