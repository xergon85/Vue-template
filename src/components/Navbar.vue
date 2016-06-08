/**
* Created by Christoffer Isenberg on 06-May-16.
*/

<template>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{ navTitle }}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <!-- Global menu items -->
                    <li><a v-link="{ name: 'home.welcome' }">{{trans('general.home') }}</a></li>

                    <!-- Menu items hidden by scopes -->
                    <template v-if="isLoggedIn">
                        <!-- <li><a v-link="{ name: 'welcome' }">{{ trans('general.home') }}</a></li> -->
                    </template>

                    <template v-if="isAdmin">
                        <li><a v-link="{ name: 'users.index' }">{{ trans('users.model') }}</a></li>
                    </template>
                </ul>

                <!-- Right side of navbar-->
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="!(auth.token && auth.user)">
                        <a v-link="{ name: 'auth.login', activeClass:'active' }">{{ trans('auth.login') }}</a>
                    </li>

                    <li v-if="auth.token && auth.user" class="dropdown">
                        <a href="#" class="dropdown-toggle"
                           data-toggle="dropdown" role="button"
                           aria-expanded="false"
                        >
                            {{ auth.user.name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <!-- Settings -->
                            <li class="dropdown-header">{{ trans('general.settings') }}</li>
                            <li>
                                <a v-link="{ name: 'auth.profile' }">
                                    <i class="fa fa-btn fa-fw fa-user"></i>{{ trans('auth.profile') }}
                                </a>
                            </li>
                            <!-- Logout -->
                            <li>
                                <a href="#" @click="logout()">{{ trans('auth.logout') }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script type="text/ecmascript-6">
    import { logout, getUserInfo } from '../vuex/actions'
    import { isAdmin, getAuthObject, isLoggedIn } from '../vuex/getters'
    export default {
        data() {
            return {
                navTitle: 'X'
            }
        },
        vuex: {
            getters: {
                auth: getAuthObject,
                isAdmin: isAdmin,
                isLoggedIn: isLoggedIn
            },
            actions: {
                logout,
                getUserInfo
            }
        },
        created() {
            if(this.isLoggedIn) {
                this.getUserInfo()
            }
        }
    }
</script>

<style>

</style>