// Import needed dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import the router/store sync
import { sync } from 'vuex-router-sync'

// Import 3rd party JS libs
window.$ = window.jQuery = require('jquery')
var bootstrap = require('bootstrap-sass');
var _ = require('underscore')

// Import the shared store
import store from './vuex/store'

// Import the actual routes
import configRouter from './routes'


// Load global mixins
Vue.mixin(require('./mixins/Translation.vue'))

// Setup router
Vue.use(VueRouter)
const router = new VueRouter({
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
})

// Inject routes into the router
configRouter(router)


// Sync the store and the router
sync(store, router)

const App = Vue.extend(require('./components/App.vue'))
router.start(App, '#app')
window.router = router
