
export const state = () => ({
    msg: 'store works'
})

export const mutations = {
    showItWorks(state, { newMsg }) {
        state.msg = newMsg
    }
}
export const getters = {
    msg(state) {
        return state.msg
    }
}

