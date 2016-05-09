import cookie from 'react-cookie'
import { CookieDomain } from '../config.js'

let cookieConfig = {}
if(CookieDomain !== '') {
    cookieConfig = { domain: CookieDomain }
}

/**
 * Save the cookie and also set it in localStorage.
 * For some reason the cookie won't save the second
 * time around this one is called.
 *
 * @param name
 * @param value
 */
export function saveCookie(name, value) {
    cookie.save(name, value, cookieConfig)
    localStorage.setItem(name, value)
}

/**
 * Get the cookie, and if it's undefined get the value from the localStorage instead.
 *
 * @param name
 * @returns {*}
 */
export function getCookie(name) {
    return cookie.load(name) !== undefined ? cookie.load(name) : localStorage.getItem(name)
}

/**
 * Remove the cookie and localStorage with the given name
 *
 * @param name
 */
export function removeCookie(name) {
    cookie.remove(name, cookieConfig)
    localStorage.removeItem(name)
}

export function signOut() {
    console.log('removing cookie')
    removeCookie('token')
}

export function isLogin() {
    return !!cookie.load('token') && (localStorage.getItem('token') !== undefined)
}