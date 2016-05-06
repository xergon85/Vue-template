/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
        <Toaster></Toaster>
    </div>
</template>

<script type="text/ecmascript-6">
    import store from '../vuex/store'
    import Navbar from './Navbar.vue'
    import Toaster from './Toaster.vue'

    export default {
        store,
        components: {
            Navbar,
            Toaster
        }
    }
</script>

<style>

</style>