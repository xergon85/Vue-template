/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div class="panel-heading">
        {{ trans('general.welcome') }}
    </div>
    <div class="panel-body">
        {{ trans('general.welcome_content') }}
        <button @click="showAlert">Alert</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { showMsg } from '../../../vuex/actions'
    import store from '../../../vuex/store'

    export default {
        data() {
            return {
                alertMsg: 'testestest'
            }
        },

        vuex: {
            actions: {
                showMsg
            }
        },
        methods: {
            showAlert() {
                showMsg(store, this.alertMsg)
            }
        }
    }
</script>