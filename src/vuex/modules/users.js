import {
    REQUEST_USERS,
    SUCCESS_ADD_USER,
    GET_USERS_FAILURE,
} from '../types'


const state = {
    isFetching: false,
    users: []
}

const mutations = {
    [REQUEST_USERS](state) {
        state.isFetching = true
    },
    [SUCCESS_ADD_USER](state, action) {
        state.users.push(action.user)
    },
    [GET_USERS_FAILURE](state) {
        state.isFetching = false
        state.users = []
    }
}

export default {
    state,
    mutations
}