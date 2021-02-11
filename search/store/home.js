/*
*** Defining the States ***
*/

const state = () => ({
    searchValue: ''
})

/*
*** Defining the Getters ***
*/
const getters = {}

/*
*** Defining the Mutations ***
*/

const mutations = {
    SET_SEARCH(state,payload){
        state.searchValue = payload
    },
}

/*
*** Defining the Actions ***
*/

const actions = {
    SEARCH(context, payload){
        context.commit('SET_SEARCH', payload);
    }
}

// Exporting Methods
export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
}
