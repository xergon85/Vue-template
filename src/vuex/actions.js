/**
 * Created by xergo on 06-May-16.
 */
import api from '../api'
import * as types from './types'
import { saveCookie, signOut } from '../utils/authService'

/**
 * Simple method for creating actions that just passes the action to the mutators.
 * Example of usage:
 * "export const addTask = makeAction('ADD_TASK')"
 * @param type
 * @returns {function(): *}
 */
function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

// ALERT ACTIONS
export const showMsg = ({dispatch}, content,type='error') => {
    dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({dispatch}) => {
    dispatch(types.HIDE_MSG)
}


// AUTH ACTIONS

/**
 *
 * @param dispatch
 * @param router
 * @param store
 */
export const logout = ({ dispatch, router}, store) => {
    signOut()
    router.go({path: '/'})
    dispatch(types.LOGOUT_USER)
}

/**
 * Login the user, get the user info and save them in the auth store.
 *
 * @param store
 * @param userInfo
 */
export const localLogin = (store, userInfo) => {
    console.log('Logging in:')
    api.localLogin(userInfo).then(response => {
        if(!response.ok) {
            return showMsg(store, response.data.error_msg || 'auth.login_failed')
        }
        const token = response.data.token
        saveCookie('token', token)
        getUserInfo(store)
        store.dispatch(types.LOGIN_SUCCESS, {token: token})
        showMsg(store, 'auth.login_success', {token: token})
        store.router.go({name: 'dashboard.main'})
    }, response => {
        showMsg(store, response.data.error_msg || 'auth.login_failed')
    })
}

/**
 * Get the userinfo from the API
 *
 * @param dispatch
 */
export const getUserInfo = ({ dispatch }) => {
    api.getMe().then(response => {
        if(!response.ok) {
            return dispatch(types.USERINFO_FAILURE)
        }
        dispatch(types.USERINFO_SUCCESS, { user: response.data.data})
    }, response => {
        dispatch(types.USERINFO_FAILURE)
    })
}

/**
 * Update the user
 *
 * @param store
 * @param userInfo
 */
export const updateUser = (store, userInfo) => {
    api.mdUser(userInfo).then(response => {
        if(!response.ok) {
            return showMsg(store, 'auth.user_update_failed')
        }
        store.dispatch(types.UPDATE_USER_SUCCESS, {user: response.data.data})
        showMsg(store, 'auth.user_update_success')
    }, response => {
        showMsg(store, 'auth.user_update_failed')
    })
}

// USER ACTIONS

export const fetchUsers = () => {
    api.getUsers().then(response => {
        if(!response.ok) {
            return dispatch(types.GET_USERS_FAILURE)
        }
        dispatch(types.REQUEST_USERS, { users: response.data.user})
    }, response => {
        dispatch(types.GET_USERS_FAILURE)
    })
}