<template>
    <div class="panel-heading">
        {{ trans('auth.register') }}
    </div>
    <div class="panel-body">
            <form class="form-horizontal">

                <div class="form-group">
                    <label class="col-md-4 control-label">{{ trans('auth.email') }}</label>
                    <div class="col-md-6">
                        <input v-model="user.email"
                               class="form-control"
                               :placeholder="trans('auth.email')"
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
    </div>
</template>
<script type="text/ecmascript-6">
    export default {

    }
</script>