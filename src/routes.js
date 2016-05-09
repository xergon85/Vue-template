export default function (router) {
    router.map({
        '/home': {
            component: require('./components/pages/Home.vue'),
            subRoutes: {
                '/welcome': {
                    name: 'welcome',
                    component: require('./components/pages/home/Welcome.vue')
                },
                '/about': {
                    name: 'about',
                    component: require('./components/pages/home/About.vue')
                }
            }
        },

        '/auth': {
            component: require('./components/pages/Auth.vue'),
            subRoutes: {
                '/login': {
                    name: 'login',
                    component: require('./components/pages/auth/Login.vue'),
                    guest: true
                },
                '/profile': {
                    name: 'profile',
                    component: require('./components/pages/auth/Profile.vue'),
                    auth: true
                },
                '/register': {
                    name: 'register'
                }
            }
        },
        
        
        '*': {
            component: require('./components/NotFound.vue')
        }
    })

    router.alias({
        '': '/home/welcome',
        '/': '/home/welcome',
        '/auth': '/auth/login',
        '/login': '/auth/login'
    })
}
