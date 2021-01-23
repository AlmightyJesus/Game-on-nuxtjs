
export const state = () => ({
    user: 'walak'
})

export const mutations = {
    showUserWorks(state,  newUser ) {
        state.user = newUser
        console.log(state.user);
    }
}

export const getters = {
    currUser(state) {
        return state.user
    }
}
