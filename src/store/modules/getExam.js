import {getExam} from "@/api/examination.js"
const state={
    //试卷列表
    examList:[]
}
const mutations={
    updateExames(state,payload){
        state.examList=payload
    },
}
const actions= {
    async getExam({commit},payload){
        let res=await getExam(payload)
        commit("updateExames",res.exam)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }