/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
        <Toaster></Toaster>
        <footer-component></footer-component>
    </div>
</template>

<script type="text/ecmascript-6">
    import store from '../vuex/store'
    import HeaderComponent from './Header.vue'
    import FooterComponent from './Footer.vue'
    import Toaster from './Toaster.vue'

    export default {
        store,
        components: {
            HeaderComponent,
            Toaster,
            FooterComponent
        }
    }
</script>

<style lang="sass">
    @import "../../sass/app.scss";
</style>