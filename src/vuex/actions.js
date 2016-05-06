/**
 * Created by xergo on 06-May-16.
 */
import api from '../api'
import * as types from './types'
import { saveCookie, signOut } from '../utils/authService'

export const showMsg = ({dispatch}, content,type='error') => {
    dispatch(types.SHOW_MSG, {content:content,type:type})
}

export const getCaptchaUrl = ({dispatch}) => {
    dispatch(types.GET_CAPTCHAURL)
}

export const logout = ({ dispatch, router}) => {
    signOut()
    router.go({path: '/'})
    dispatch(types.LOGOUT_USER)
}

export const getSnsLogins = ({ dispatch }) => {
    api.getSnsLogins().then(response => {
        if(!response.ok) {
            return dispatch(types.FAILURE_GET_SNSLOGINS)
        }
        dispatch(types.SUCCESS_GET_SNSLOGINS, response.data.data)
    }, response => {
        dispatch(types.FAILURE_GET_SNSLOGINS)
    })
}

export const localLogin = (store, userInfo) => {
    api.localLogin(userInfo).then(response => {
        if(!response.ok) {
            getCaptchaUrl(store)
            return showMsg(store, response.data.error_msg || trans('auth.login_failed'))
        }
        const token = response.data.token
        saveCookie('token', token)
        getUserInfo(store)
        store.dispatch(types.LOGIN_SUCCESS, {token: token})
        showMsg(store, trans('auth.login_success', {token: token}))
        store.router.go({path: '/'})
    }, response => {
        getCaptchaUrl(store)
        showMsg(store, response.data.error_msg ||_trans('auth.login_failed'))
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
            return showMsg(store, trans('auth.user_update_failed'))
        }
        store.dispatch(types.UPDATE_USER_SUCCESS, {user: response.data.data})
        showMsg(store, trans('auth.user_update_success'))
    }, response => {
        showMsg(store, trans('auth.user_update_failed'))
    })
}