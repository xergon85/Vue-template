import { AuthResource, UserResource } from './resources'

export default {
    localLogin: data => AuthResource.save({id: 'login'}, data),
    getMe: () => AuthResource.get({id:'me'}),
    mdUser: (data) => UserResource.update({id:'mdUser'},data),
    getUsers: () => UserResource.get({}),
}