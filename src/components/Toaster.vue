/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <vue-toast v-ref:toast></vue-toast>
</template>

<script type="text/ecmascript-6">
    import vueToast from 'vue-toast'
    import { showMsg, hideMsg } from '../vuex/actions'

    export default {
        components: { vueToast },
        vuex: {
            getters: {
                msg: ({showmsg}) => showmsg.message
            },
            actions: {
                showMsg,
                hideMsg
            }
        },
        watch: {
            'msg': {
                handler: function (val, oldVal) {
                    if(val.content !== '') {
                        this.showToast(val.content, val.type)
                        this.hideMsg()
                    }
                },
                deep: true
            }
        },
        methods: {
            showToast(content, type="error", position="top right") {
                this.$refs.toast.setOptions({ maxToasts: 3, position: position})
                this.$refs.toast.showToast(content, {
                    theme: type,
                    timeLife: 2000,
                    closeBtn: false
                })
            }
        }
    }
</script>

<style>

</style>