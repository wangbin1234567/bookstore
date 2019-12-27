import { userLister, identity, api_identity, relation, authority, view_authority } from '@/api/userDisplay'

const state = {
    DataList:[],
    identityList:[],
    apIIdentity:[],
    APIrelation:[],
    apiAuthority:[],
    viewAuthority:[]
}

const mutations = {
    USER_LISTEN:(state,payload) => {
        state.DataList = payload;
    },
    Identity_List:(state,payload) => {
        state.identityList = payload;
    },
    API_Identity:(state,payload) => {
        state.apIIdentity = payload;
    },
    API_relation:(state,payload) => {
        state.APIrelation = payload;
    },
    LOOK_authority:(state,payload) => {
        state.apiAuthority = payload
    },
    ViewAuthority:(state,payload) => {
        state.viewAuthority = payload
    }
}

const actions = {
    async userLister({commit}){
        let res = await userLister();
        commit("USER_LISTEN",res.data)
    },
    async identity({commit}){
        let res = await identity();
        commit("Identity_List",res.data)
    },
    async api_identity({commit}){
        let res = await api_identity();
        commit("API_Identity",res.data)
    },
    async relation({commit}){
        let res = await relation();
        commit("API_relation",res.data)
    },
    async authority({commit}){
        let res = await authority()
        commit("LOOK_authority",res.data)
    },
    async view_authority({commit}){
        let res = await view_authority()
        commit("ViewAuthority",res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
