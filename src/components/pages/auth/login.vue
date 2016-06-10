/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div class="panel-heading">
        {{ trans('auth.login_message') }}
    </div>
    <div class="panel-body">
        <form class="form-horizontal" v-on:submit.prevent="login">

            <div class="form-group">
                <label class="col-md-4 control-label">{{ trans('auth.name') }}</label>
                <div class="col-md-6">
                    <input v-model="user.name"
                           class="form-control"
                           :placeholder="trans('auth.name')"
                    >
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">{{ trans('auth.password') }}</label>
                <div class="col-md-6">
                    <input type="password"
                           v-model="user.password"
                           class="form-control"
                           :placeholder="trans('auth.password')"
                    >
                </div>
            </div>

            <!-- Can add Captcha here if needed -->

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit"
                            class="btn btn-primary"
                            id="signin_btn">
                        <i class="fa fa-btn fa-sign-in"></i>{{ trans('auth.login') }}
                    </button>

                    <a class="btn btn-link" v-link="{ name: 'auth.forgot' }">{{ trans('auth.forgot') }}</a>
                </div>
            </div>
        </form>
        </validator>
    </div>
</template>

<script type="text/ecmascript-6">
    // Import login action, if using other auth method import that action aswell
    import { localLogin } from '../../../vuex/actions'
    import { getAuthObject } from '../../../vuex/getters'

    export default {
        el() {
            return '#signinForm'
        },
        components: {
            // Add if using other login method OAuth for example.
        },
        vuex: {
            getters: {
                token: ({ getAuthObject }) => token
            },
            actions: {
                localLogin
            }
        },
        data() {
            return {
                user: {
                    name: '',
                    password: '',
                }
            }
        },
        route: {
            activate: function(transition) {
                this.token?transition.redirect('/'):transition.next()
            }
        },
        created() {
            // Get login methods, captchas etc
        },
        methods: {
            login() {
                this.localLogin(this.user)
            }
        }
    }
</script>

<style>

</style>