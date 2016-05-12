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
    let condition = false
    // loop through each role and check if it's admin
    state.auth.user.role.forEach((element, index, array) => {
        if(element ==='admin')
            condition = true
    })
    return condition
}

export const isLoggedIn = state => {
    return state.auth.token !== null;
}