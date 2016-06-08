export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://api.yourdomain.dev'
    : 'http://laravel-api.dev/api/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
    ? '.yourdomain.dev'
    : ''