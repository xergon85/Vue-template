/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div class="panel-heading">
        {{ trans('dashboard.main') }}
    </div>
    <div class="panel-body">
        {{ trans('dashboard.main_content') }}
    </div>
</template>

<script type="text/ecmascript-6">
    import store from '../../../vuex/store'

    export default {
        data() {
            return {

            }
        },

        vuex: {
            actions: {

            }
        },
        methods: {

        }
    }
</script>