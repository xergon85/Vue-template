<template>
    <div class="container app-screen">
        <!-- Tabs -->

        <div class="col-md-3">
            <div class="panel panel-default panel-flush">
                <div class="panel-heading">
                    {{ trans('auth.home') }}
                </div>
                <div class="panel-body">
                    <div class="app-tabs">
                        <ul class="nav app-tabs-stacked">
                            <li v-if="!isLoggedIn">
                                <a v-link="{ name: 'auth.login' }">
                                    <i class="fa fa-btn fa-fw fa-sign-in"></i>&nbsp;{{ trans('auth.login') }}</span>
                                </a>
                            </li>
                            <li v-if="!isLoggedIn">
                                <a v-link="{ name: 'auth.register' }">
                                    <i class="fa fa-btn fa-fw fa-chevron-circle-up"></i>&nbsp;{{ trans('auth.register') }}</span>
                                </a>
                            </li>
                            <li v-if="isLoggedIn">
                                <a v-link="{ name: 'auth.profile' }">
                                    <i class="fa fa-btn fa-fw fa-user"></i>&nbsp;{{ trans('auth.profile') }} </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tab Panes -->
        <div class="col-md-9">
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="panel panel-default">
                        <router-view></router-view>
                    </div>
                </div><!-- End tab panel -->
            </div><!-- End tab content -->
        </div><!-- End tab panes col-md-9 -->
    </div><!-- End container -->
</template>

<script type="text/ecmascript-6">
    import { getAuthObject } from '../../vuex/getters'

    export default {
        vuex: {
            getters: {
                auth: getAuthObject
            }
        },
        computed: {
            isLoggedIn() {
                return this.auth.token !== null
            }
        }
    }
</script>