import {getW5tcy} from "@/api/examination.js"
const state = {
    //详情列表数据
    detailList:""
}

const mutations = {
    updateW5tcy(state,payload){
    state.detailList=payload
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