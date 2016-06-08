import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from '../config'
import { getCookie, signOut } from '../utils/authService'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = { withCredentials: true }

Vue.http.interceptors.push({
    request (request) {
        request.headers = request.headers || {}
        if(getCookie('token')) {
            request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
        } else {
            console.log('Cookie missing?!')
        }
        return request
    },
    response(response) {
        if(response.status == 401) {
            signOut()
        }
        return response
    }
})

export const AuthResource = Vue.resource(API_ROOT + 'auth{/id}')
export const UserResource = Vue.resource(API_ROOT + 'users{/id}')