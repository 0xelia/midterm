<template>
  <div id="app">
    <HeaderComp/>
    <MainComp/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/headerComp.vue';
import MainComp from './components/mainComp.vue';
import FooterComp from './components/footerComp.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
}
}
</script>

<style lang="scss">
  #app {
    @import './style/generals.scss';
    
}
</style>
