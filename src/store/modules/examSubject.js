import {getSubject} from "@/api/examination.js"
const state={
    //课程
    course:""
}
const mutations={
    updateSubject(state,payload){
        state.course=payload
    },
}
const actions= {
    async getSubject({commit},payload){
        let res=await getSubject(payload)
        commit("updateSubject",res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }