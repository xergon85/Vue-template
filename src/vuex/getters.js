export const getUsers = state => {
    return state.users
}

export const getRoleList = state => {
    return state.roles.map((role)  => {
        return {
            id: role.id,
            name: role.name
        }
    })
}

export const getAuthObject = state => {
    return state.auth
}

export const isAdmin = state => {
    return state.auth.user.role.map((role) => {
        if(role ==='admin')
            return true
    })
}