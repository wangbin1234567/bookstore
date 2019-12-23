import {CreateExam} from "@/api/examination.js"
const state = {
    data:""
}

const mutations = {
    updateExam(state,payload){
    state.data=payload
    window.console.log(state.data,"-----data")
    },
}

const actions = {
   async CreateExam({commit},payload){
       let res = await CreateExam(payload)
       commit("updateExam",res)
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }