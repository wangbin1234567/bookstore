import {getExamType} from "@/api/examination.js"
const state={
    //试卷类型
    types:""
}
const mutations={
    updateExamType(state,payload){
        state.types=payload
    },
}
const actions= {
    async getExamType({commit},payload){
        let res=await getExamType(payload)
        // window.console.log(res.data,"----试卷")
        commit("updateExamType",res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }