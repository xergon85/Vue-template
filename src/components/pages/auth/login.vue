/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <div class="panel-heading">
        {{ trans('auth.login_message') }}
    </div>
    <div class="panel-body">
        <validator name="signinValidation">
        <form class="form-horizontal" @submit.prevent="login($signinValidation)" novalidate>

            <div class="form-group">
                <label class="col-md-4 control-label">{{ trans('auth.email') }}</label>
                <div class="col-md-6">
                    <input v-model="user.email"
                           v-validate:email="{ required: true, minlength: 3, maxlength: 30, email: true }"
                           class="form-control"
                           :class="[$signinValidation.email.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.email.dirty ? 'ng-dirty' : '']"
                           :placeholder="trans('auth.email')"
                    >
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">{{ trans('auth.password') }}</label>
                <div class="col-md-6">
                    <input type="password"
                           v-model="user.password"
                           v-validate:password="{ required: true }"
                           class="form-control"
                           :class="[$signinValidation.password.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.password.dirty ? 'ng-dirty' : '']"
                           :placeholder="trans('auth.password')"
                    >
                </div>
            </div>

            <!-- Can add Captcha here if needed -->

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit"
                            class="btn btn-primary"
                            id="signin_btn"
                            :disabled="$signinValidation.invalid">
                        <i class="fa fa-btn fa-sign-in"></i>{{ trans('auth.login') }}
                    </button>

                    <a class="btn btn-link" v-link="{ path: '/auth/forgot' }">Forgot Your Password?</a>
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
        validators: {
            email: val => /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
        },
        data() {
            return {
                user: {
                    email: '',
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
            login(signinValidation) {
                if(signinValidation.valid) {
                    this.localLogin(this.user)
                }
            }
        }
    }
</script>

<style>

</style>