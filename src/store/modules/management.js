import { jurisdiction, userList, Apijurisdiction  } from '@/api/index'

const state = {
    AddJurisdiction: [],
    userId:[],
    ApiList:[]
}
  
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.AddJurisdiction = payload
    },
    USER_ID:(state,payload) => {
        let data = [];
        payload.map(item => {
            data.push(item.identity_text)
        })
        state.userId = [...new Set(data)]        
    },
    API_list:(state,payload) => {
        state.ApiList = payload;
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
    },
    async Apijurisdiction({commit}){
        let res = await Apijurisdiction();
        commit('API_list',res.data)
    }
}
  
export default {
    namespaced: true,
    state,
    mutations,
    actions
}