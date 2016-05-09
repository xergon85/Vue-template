/**
 * Created by xergo on 06-May-16.
 */
import api from '../api'
import * as types from './types'
import { saveCookie, signOut } from '../utils/authService'

export const showMsg = ({dispatch}, content,type='error') => {
    dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const hideMsg = ({dispatch}) => {
    dispatch(types.HIDE_MSG)
}

export const logout = ({ dispatch, router}, store) => {
    signOut()
    router.go({path: '/'})
    dispatch(types.LOGOUT_USER)
}

export const localLogin = (store, userInfo) => {
    console.log('Logging in:')
    api.localLogin(userInfo).then(response => {
        if(!response.ok) {
            return showMsg(store, response.data.error_msg || 'auth.login_failed')
        }
        const token = response.data.token
        console.log('Settings token: ', token)
        saveCookie('token', token)
        getUserInfo(store)
        store.dispatch(types.LOGIN_SUCCESS, {token: token})
        showMsg(store, 'auth.login_success', {token: token})
        store.router.go({path: '/'})
    }, response => {
        showMsg(store, response.data.error_msg || 'auth.login_failed')
    })
}

export const getUserInfo = ({ dispatch }) => {
    api.getMe().then(response => {
        if(!response.ok) {
            return dispatch(types.USERINFO_FAILURE)
        }
        dispatch(types.USERINFO_SUCCESS, { user: response.data})
    }, response => {
        dispatch(types.USERINFO_FAILURE)
    })
}

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