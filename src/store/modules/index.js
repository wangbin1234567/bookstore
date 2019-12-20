import { jurisdiction, userList } from '@/api/index'

const state = {
    AddJurisdiction: [],
    userId:[]
}
  
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.AddJurisdiction = payload
    },
    USER_ID:(state,payload) => {
        state.userId = payload
    }
}
  
const actions = {
    async jurisdiction({commit}){
        let res = await jurisdiction()
        commit('ADD_ERROR_LOG',res.data)
    },
    async userList({commit}){
        let res = await userList();
        commit('USER_ID',res.data)
    }
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}