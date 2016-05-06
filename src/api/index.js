import { AuthResource, UserResource } from './resources'

export default {
    localLogin: data => AuthResource.save({id: 'local'}, data),
    getSnsLogins:  () => UserResource.get({id:'snsLogins'}),
    getMe: () => UserResource.get({id:'me'}),
    mdUser: (data) => UserResource.update({id:'mdUser'},data)
}