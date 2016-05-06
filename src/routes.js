export default function (router) {
    router.map({
        '/': {
            name: 'home',
            component: require('./components/Home/index.vue')
        },
        '/login': {
            name: 'login',
            component: require('./components/Login/index.vue')
        },
        '*': {
            component: require('./components/NotFound.vue')
        }
    })
}
