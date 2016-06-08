export default function (router) {
    router.map({
        '/home': {
            component: require('./components/pages/Home.vue'),
            subRoutes: {
                '/welcome': {
                    name: 'home.welcome',
                    component: require('./components/pages/home/Welcome.vue')
                },
                '/about': {
                    name: 'home.about',
                    component: require('./components/pages/home/About.vue')
                },
                '/terms': {
                    name: 'home.terms',
                    component: require('./components/pages/home/Terms.vue')
                }
            }
        },

        '/auth': {
            component: require('./components/pages/Auth.vue'),
            subRoutes: {
                '/login': {
                    name: 'auth.login',
                    component: require('./components/pages/auth/login.vue'),
                    guest: true
                },
                '/profile': {
                    name: 'auth.profile',
                    component: require('./components/pages/auth/Profile.vue'),
                    auth: true
                },
                '/register': {
                    name: 'auth.register',
                    component: require('./components/pages/auth/Register.vue'),
                    auth: false
                },
                '/forgot': {
                    name: 'auth.forgot',
                    component: require('./components/pages/auth/Forgot.vue'),
                    auth: false
                }
            }
        },
        '/users': {
            component: require('./components/pages/Users.vue'),
            subRoutes: {
                '/index': {
                    name: 'users.index',
                    component: require('./components/pages/users/index.vue'),
                    auth: true
                },
                '/create': {
                    name: 'users.create',
                    component: require('./components/pages/users/create.vue'),
                    auth: true
                }
            }
        },
        
        
        '*': {
            component: require('./components/pages/NotFound.vue')
        }
    })

    router.alias({
        '': '/home/welcome',
        '/': '/home/welcome',
        '/auth': '/auth/login',
        '/login': '/auth/login'
    })
}
