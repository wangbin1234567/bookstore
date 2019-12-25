import {getW5tcy} from "@/api/examination.js"
const state = {
    detailList:""
}

const mutations = {
    updateW5tcy(state,payload){
    state.detailList=payload
    // window.console.log(state.detailList,"-----list")
    },
}

const actions = {
   async getW5tcy({commit},payload){
       let res = await getW5tcy(payload)
       commit("updateW5tcy",res.data)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }